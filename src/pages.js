import React from "react";
import { Link, Outlet } from "react-router-dom";
export function Home() {
    return (
        <div>
            <h1>[홈페이지]</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[회사 소개]</h1>
            <Link to="services">서비스</Link>
            <Link to="history">연혁</Link>
            <Outlet/>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[이벤트]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
            <h1>[제품]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[고객지원]</h1>
        </div>
    );
}