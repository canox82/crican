import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Navbar({ children, ...customMeta }) {
    const router = useRouter();
    return (
        <div>
            <ul class="flex">
                <li class="mr-6">
                    <a class="text-orange-400 hover:text-red-500" href="/">Home</a>
                </li>
                <li class="mr-6">
                    <a class="text-orange-400 hover:text-red-500" href="#">Webdesign</a>
                </li>
                <li class="mr-6">
                    <a class="text-orange-400 hover:text-red-500" href="#">Progetti</a>
                </li>
                <li class="mr-6">
                    <a class="text-orange-400 hover:text-red-500" href="#">Contatti</a>
                </li>
            </ul>
        </div>
    );
}
