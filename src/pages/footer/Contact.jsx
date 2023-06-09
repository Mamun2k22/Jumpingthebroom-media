import React, { useState } from "react";

function Contact() {

    return (
        <div>

            <div class="mx-auto">
                <div class="max-w-md mx-4 sm:mx-auto lg:mt-12 bg-white p-8 rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700">Contact Us</h1>
                    </div>
                    <div class="m-7">
                        <form action="#" method="POST">
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm text-gray-600">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600">Your Message</label>
                                <textarea rows="5" name="message" id="message" placeholder="Your Message"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    required></textarea>
                            </div>
                            <div class="mb-6">
                                <button type="submit"
                                    class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send
                                    Message</button>
                            </div>
                            <p class="text-base text-center text-gray-400" id="result">
                            </p>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Contact;
