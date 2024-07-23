"use server";

import type { NewsItem } from "@/types";
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

export async function getAllNews() {
  const news = await db.news.findMany();
  return news;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  return db.news.findMany({
    take: 3,
    orderBy: {
      date: "desc",
    },
  });
}

export async function getAvailableNewsYears(): Promise<number[]> {
  const dates = await db.news.findMany({
    distinct: ["date"],
    select: {
      date: true,
    },
  });
  let years = dates.map((date) => Number(date.date.slice(0, 4)));
  years = [...Array.from(new Set(years))];
  return years.sort((a, b) => a - b);
}

export async function getAvailableNewsMonths(year: string): Promise<number[]> {
  const startDate = new Date(`${year}-01-01`).toISOString();
  const endDate = new Date(`${year}-12-31`).toISOString();

  const dates = await db.news.findMany({
    where: {
      date: {
        gte: startDate,
        lt: endDate,
      },
    },
    distinct: ["date"],
    select: {
      date: true,
    },
  });
  const months = dates.map((date) => new Date(date.date).getMonth() + 2);

  return months;
}

export async function getNewsForYear(year): Promise<NewsItem[]> {
  return db.news.findMany({
    where: {
      date: {
        contains: year,
      },
    },
  });
}

export async function getNewsForYearAndMonth(
  year: number,
  month: number
): Promise<NewsItem[]> {
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = new Date(year, month, 0).toISOString().split("T")[0];
  const news = await db.news.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    orderBy: {
      date: "desc",
    },
  });
  return news;
}

export async function getNewsItem(id: string): Promise<NewsItem> {
  const newsItem = await db.news.findUnique({
    where: {
      id,
    },
  });
  return newsItem;
}
