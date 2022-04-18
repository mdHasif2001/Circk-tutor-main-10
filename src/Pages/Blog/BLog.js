import React from 'react';
import './Blog.css'

const BLog = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-3'>BLog</h2>

            <div className='blog-txt'>
                <p><b>What is Difference between authorization and authentication?</b></p>
                <p>Authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে authorization  হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া।
                    Authentication সাধারণত একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড দ্বারা করা হয়।
                    অপরদিকে Authorization successfully authenticated হওয়ার পর বিভিন্ন জিনিস ব্যবহার করার পারমিশন দিয়ে থাকে যেমনঃ information, files, databases, funds, locations, almost anything.
                </p>
            </div>

            <div className='blog-txt'>
                <p><b>Why are you using firebase? What other options do you have to implement authentication?</b></p>
                <p>Firebase Authentication সহজে ব্যবহারযোগ্য এবং এটি backend এ সার্ভিস দিয়ে থাকে।  এবং এটির SDK ব্যবহার করা অনেক সহজ। এবং এটি ready-made UI libraries দিয়ে থাকে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় authenticatio সার্ভিস provide করে থাকে। There are too many option that I can implement authentication like : Parse, Supabase, Kuzzle, Back4App etc

                </p>
            </div>

            <div className='blog-txt'>
                <p><b>What other services does firebase provide other than authentication?</b></p>
                <p>Authentication ব্যতিত firebase আরও অনেক সার্ভিস প্রোভাইড করে থাকে যেমনঃ</p>
                <li>Cloud Firestore
                </li>
                <li>Cloud Functions
                </li>
                <li>Authentication</li>
                <li>Hosting</li>
                <li>Cloud Storage
                </li>
                <li>Google Analytics
                </li>
                <li>Predictions</li>
                <li>Cloud Messaging
                </li>
                <li>Dynamic Links
                </li>
                <li>Remote Config
                </li>
            </div>

        </div>
    );
};

export default BLog;