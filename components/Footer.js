import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Footer({ children, ...customMeta }) {
    const router = useRouter();
    return (
        <div className="w-full text-center">
            CriCan - Grafica e Webdesign
        </div>
    );
}
