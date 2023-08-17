



import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className=''>
            <section className="about" id="about">
                <div className="section__container about__container">
                    <div className="about__content">
                        <h2 className="section__header">About us</h2>
                        <p className="section__subheader">
                        Dive into the heart-pounding world of exploration with Travel Quest! We are not just a travel website; we're your passport to uncharted territories, adrenaline-pumping escapades, and breathtaking discoveries. Feel the rush as you traverse vibrant cities, conquer towering peaks, and navigate untamed wilderness.

                        At Travel Quest, we're obsessed with delivering you the most extraordinary experiences. Our team of intrepid adventurers scours the globe to unearth hidden gems, insider secrets, and jaw-dropping destinations that will leave you in awe. Get ready to embark on journeys that redefine your limits and redefine your world.

                        {/* With curated itineraries, expert advice, and an unwavering commitment to authenticity, Travel Quest is your partner in creating memories that will last a lifetime. Our mission? To ignite the fire of wanderlust within you, pushing you to explore further, dream bigger, and live life to the fullest. */}
{/* 
                        Adventure beckons – are you ready to answer the call? Join us on this exhilarating ride as we take you on a quest that will redefine the way you experience the world. */}
                    </p>
                        <div className="about__flex">
                            <div className="about__card">
                                <h4>268</h4>
                                <p>Completed Trips</p>
                            </div>
                            <div className="about__card">
                                <h4>176</h4>
                                <p>Tour Guides</p>
                            </div>
                            <div className="about__card">
                                <h4>153</h4>
                                <p>Destinations</p>
                            </div>
                        </div>
                        <button class="btn">
                            Read More <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                    <div className="about__image">
                        <img src="https://cdn.leonardo.ai/users/cc91876d-418b-4856-82a3-b277d5cda999/generations/378f4e2b-f74c-495d-8842-e7b667ec9fba/DreamShaper_v7_travel_the_world_destination_to_venture_where_n_0.jpg" alt="about" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;




