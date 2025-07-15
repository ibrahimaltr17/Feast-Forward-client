import React from 'react';

const Feedback = () => {
    return (
        <section className='space-y-10 my-20'>
            <div className='p-3 border-l-8 border-green-800'>
                <h3 className='text-3xl font-bold text-green-800'>Feedback</h3>
            </div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top feedback from our clients</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://static.vecteezy.com/system/resources/previews/039/334/802/non_2x/ai-generated-indian-female-student-free-photo.jpg" /></div>
                    <div>
                        <div>Samiya Rahman</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Computer Science Student, Dhaka</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "I've been using LangSync for the past three months to improve my Spanish, and the progress I’ve made is incredible. The tutors are native speakers, very patient, and they tailor each session to my goals. I especially love the flexibility of scheduling — I can learn even with a busy university routine. The platform is clean, intuitive, and I never had a technical issue. Highly recommended!"
                    </p>
                    
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://media.istockphoto.com/id/524259493/photo/indian-male-student.jpg?s=612x612&w=0&k=20&c=CKcc7wHKkzYfp4UTjNYXzXszW9R3pd4GP3-34q4gqM4=" /></div>
                    <div>
                        <div>Rafsan Ahmed</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Language Enthusiast, Chittagong</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "As someone new to Japanese, I was nervous about starting. But LangSync made it easy. My tutor made me feel comfortable from day one, and we started with simple phrases before moving into grammar. I enjoy how each lesson builds on the last. Plus, the tutor reviews and ratings helped me find the perfect match quickly."
                    </p>
                    
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://media.istockphoto.com/id/1410798175/photo/smiling-indian-woman-formal-corporate-office-employee-at-workplace-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=dJ2TopBFTQpLDMGBV7gElL12hpnoy5-f9UZgKiWHnA0=" /></div>
                    <div>
                        <div>Anika Chowdhury</div>
                        <div className="text-xs uppercase font-semibold opacity-60">HR Professional, Sylhet</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "LangSync is perfect for working people like me. I can book classes in the evening or even on weekends. I’ve been practicing English for job interviews, and my tutor helped me refine my speaking, pronunciation, and confidence. After just 5 sessions, I already feel more fluent"
                    </p>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

            </ul>
        </section>
    );
};

export default Feedback;