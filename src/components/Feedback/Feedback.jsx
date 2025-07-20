import React from 'react';

const Feedback = () => {
    return (
        <section className='space-y-10 my-20'>
            <div className='p-3 border-l-8 border-orange-800'>
                <h3 className='text-3xl font-bold text-orange-800'>Feedback</h3>
            </div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top feedback from our users</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://randomuser.me/api/portraits/women/45.jpg" /></div>
                    <div>
                        <div>Naznin Akter</div>
                        <div className="text-xs uppercase font-semibold opacity-60">University Student, Dhaka</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "This platform helped me get free meals during a really tough time. The request system is simple, and the donors are kind. I love how I can track my food requests without any confusion. Truly a helpful service!"
                    </p>
                    <button className="btn btn-square btn-ghost">
                        ❤️
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://randomuser.me/api/portraits/men/32.jpg" /></div>
                    <div>
                        <div>Mahmud Hasan</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Shop Owner, Chittagong</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "I had some extra food from my shop and didn’t want it to go to waste. Sharing it through this site was easy and efficient. I could see who requested it and when they planned to pick it up. Great initiative!"
                    </p>
                    <button className="btn btn-square btn-ghost">
                        👍
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://randomuser.me/api/portraits/women/68.jpg" /></div>
                    <div>
                        <div>Raisa Sultana</div>
                        <div className="text-xs uppercase font-semibold opacity-60">NGO Volunteer, Sylhet</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "We use this platform regularly to distribute leftover food from our charity events. It’s easy to post, and people respond quickly. The update and delete options make management smooth. Highly recommended!"
                    </p>
                    <button className="btn btn-square btn-ghost">
                        🌟
                    </button>
                </li>

            </ul>
        </section>
    );
};

export default Feedback;
