"use client";

import { useState } from "react";

const FAQS = [
    {
        question: "What is DAILA?",
        answer: "DAILA (Daily Artificial Intelligence Life Assistance) is an AI-powered productivity platform that helps you manage tasks, schedules, finances, and daily activities in one place."
    },
    {
        question: "Is DAILA free to use?",
        answer: "Yes. DAILA is designed to provide essential productivity tools and AI assistance without unnecessary complexity."
    },
    {
        question: "What can the AI assistant do?",
        answer: "DAILA can help organize tasks, analyze schedules, provide productivity suggestions, track finances, and answer questions based on the information you provide."
    },
    {
        question: "Does DAILA replace my calendar or task manager?",
        answer: "No. DAILA works alongside your existing workflow and can integrate with tools such as calendars and task management systems to make them easier to manage."
    },
    {
        question: "Is my data secure with DAILA?",
        answer: "Your data belongs to you. DAILA only uses the information necessary to provide insights, recommendations, and personalized assistance."
    },
    {
        question: "Can DAILA help with budgeting?",
        answer: "Yes. DAILA can help track expenses, monitor budgets, remind you of bills, and provide spending insights to help you make informed financial decisions."
    },
    {
        question: "Can I access DAILA on multiple devices?",
        answer: "If you're signed into your account, your information can be synchronized across supported devices."
    },
    {
        question: "Will DAILA make decisions for me?",
        answer: "No. DAILA provides recommendations and insights, but you remain in control of all decisions and actions."
    }
]

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
    return(
        <section className="max-w-3xl mx-auto py-25 px-4">
            <h2 className="text-5xl font-bold font-fredoka text-center mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-3 mb-10">
                {FAQS.map((faq, index) => (
                <div
                    key={index}
                    className="group bg-[#dfe5f1] border border-gray-400 rounded-xl px-6 py-4 cursor-pointer"
                    onClick={() => toggle(index)}
                >
                    <div className="flex justify-between items-center">
                    <span className="font-semibold group-hover:text-primary">{faq.question}</span>
                    <span className="text-xl text-gray-400 ml-4">
                        {openIndex === index ? "×" : "+"}
                    </span>
                    </div>
                    {openIndex === index && (
                    <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                    )}
                </div>
                ))}
            </div>
        </section>
    );
}