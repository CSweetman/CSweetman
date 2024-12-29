import officeImg from "../assets/project-imgs/CSweetman-Office-Image.jpg"
import AboutButton from "../components/AboutButton"

const AboutPage = () => {
    return (
        <div className=" flex flex-col justify-center items-center gap-8 pt-[4rem] px-10 h-[100%] min-h-[80vh]">
            <p className="text-3xl text-center w-[80%]  text-[#ffe6ff]">About CSweetman</p>
            <img src={officeImg} alt="" width={175} className=" rounded-full" />
            <div className="flex flex-col sm:w-[90%] md:w-[70%] z-10">
                <p className=" text-[#fff8ff] sm:text-sm md:text-base">
                    Hi, I'm Christopher Sweetman. I'm a full stack web developer with 3 years of experience under my
                    belt. I started when I first learned about HTML, CSS, and Javascript but I really fell in love when
                    I first built an React web-app project for a capstone project.
                    <br />
                    <br />
                    Since then, I started passionately create web app projects in my own time and have been keeping up
                    to date with the web development landscape. I specialize with more front end technologies being most
                    proficient with React while having a backgrond in Angular, SolidJS and Next.js. On the backend I can
                    set up servers using Java frameworks such as Spring Boot and other dabbled with other frameworks
                    like KTOR and Flask.
                    <br />
                    <br />
                    Please check out some of the proejcts I have worked on and hosted on the main page. I will be
                    updating this portfolio as I add more projects and with more pages over time! I am currently looking
                    for a new developer position, please reach out if you are interested.
                </p>
            </div>
            <div>
                <AboutButton color={"DARK"} text="LinkedIn" url="https://www.linkedin.com/in/christopher-sweetman/" />
                <AboutButton
                    color={"LIGHT"}
                    text="Github"
                    url="https://github.com/CSweetman?tab=overview&from=2024-12-01&to=2024-12-27"
                />
            </div>
        </div>
    )
}

export default AboutPage
