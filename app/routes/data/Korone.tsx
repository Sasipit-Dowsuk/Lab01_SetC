import React from "react";
//ข้อ 1

export interface AIType {
  Code: string;
  Title: string;
  Logo: string;
  Description: string;
  Category: number;
  Owner: string;
  LastestVersion: string;
  Price: number;
  Website: string;
  Top10: boolean;
}

export const AI: AIType[] = [
  {
    Code: "AI001",
    Title: "ChatGPT",
    Logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    Description: "AI สำหรับสนทนา ตอบคำถาม เขียนโค้ด",
    Category: 1,
    Owner: "Sam Altman",
    LastestVersion: "GPT-5",
    Price: 20.0,
    Website: "https://chat.openai.com",
    Top10: true
  },
  {
    Code: "AI002",
    Title: "Gemini",
    Logo: "https://preview.redd.it/gemini-changed-their-logo-v0-isn75ucqhdbf1.jpeg?auto=webp&s=86c8b57bfc6033877a5bcc34bca85ac610e7f01d",
    Description: "ช่วยสร้างเนื้อหาในลักษณะสร้างสรรค์ เช่น การเขียนบทความเชิงวิเคราะห์ การแต่งกลอน ",
    Category: 1,
    Owner: "Gemini Trust Company, LLC",
    LastestVersion: "2.5 pro",
    Price: 36.0,
    Website: "https://gemini.google.com/app?hl=th",
    Top10: true,
  },
  {
    Code: "AI003",
    Title: "Microsoft Copilot",
    Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Microsoft_Copilot_Icon.svg/1200px-Microsoft_Copilot_Icon.svg.png",
    Description: "มีความสามารถในการช่วยเขียนและปรับปรุงเอกสาร วิเคราะห์ข้อมูล และสร้างสรุปอัตโนมัติ",
    Category: 2,
    Owner: "Microsoft",
    LastestVersion: "GPT-5 model",
    Price: 30.0,
    Website: "https://copilot.microsoft.com/",
    Top10: true,
  },
  {
    Code: "AI004",
    Title: "Figma",
    Logo: "https://images.icon-icons.com/3053/PNG/512/figma_alt_macos_bigsur_icon_190181.png",
    Description: "แอปพลิเคชันที่สามารถทำงานร่วมกันได้ โดย AI ใน Figma จะช่วยวิเคราะห์เลย์เอาต์ ปรับแต่งดีไซน์ และเสนอแนวทางการออกแบบที่ดีที่สุด",
    Category: 3,
    Owner: "Dylan Field",
    LastestVersion: "125.4.9",
    Price: 25.0,
    Website: "https://www.figma.com/",
    Top10: false,
  },
  {
    Code: "AI005",
    Title: "Slack",
    Logo: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
    Description: "แอป AI ด้านการสื่อสารภายในองค์กรยอดฮิตคงหนีไม่พ้น Slack เป้นแอปพลิเคชันที่ช่วยเพิ่มประสิทธิภาพการสื่อสารในทีม",
    Category: 4,
    Owner: "Salesforce",
    LastestVersion: "4.45.69",
    Price: 15.0,
    Website: "https://slack.com/",
    Top10: false,
  }
];
