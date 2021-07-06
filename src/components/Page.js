import './Page.scss'
import './reset.scss'
import profile from '../images/profile.jpg'
// import reactLogo from '../images/reactLogo.png'
import {technologies, learning} from '../data'
const Page = () => {
    return (
        <main className="page">
            <div className="header">
                <div className="header__img">
                    <img src="" alt="image goes here" />
                </div>
                <div className="header__title">
                    <h1 className="title__name">Michał Saletra</h1>
                    <h2 className="title__job">Fullstack/JS developer</h2>
                </div>
            </div>
            <div className="links">
                <div className="links__element">
                    <img src='' />
                    <a href='https://github.com/michalagit' target="blank">github.com/michalagit</a>
                </div>
                <div className="links__element">
                    <img src='' />
                    <a href='linkedin.com/in/michalalink' target='blank'>linkedin.com/in/michalalink</a>
                </div>
                <div className="links__element">
                    <img src='' />
                    <a href='mailto:mic.saletra@gmail.com'>mic.saletra@gmail.com</a>
                </div>
                <div className="links__element">
                    <img src='' />
                    <a href='tel:0048510191889'>0048510191889</a>
                </div>
            </div>
            <div className="content">
                <div className="content-left">
                    <div className="column__section">
                        <h2 className="column__section__title">Technologies I worked with:</h2>
                        <ul className="column__section__list">
                            {technologies.map(technology => (
                                <li className="list-element">
                                    <div className="technology">
                                        <img src={technology.logo} className='technology__image' alt='profile img' />
                                        <h3 className="technology__name">{technology.name}</h3>
                                    </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="column__section">
                        <h2 className="column__section__title">Technologies I am learning:</h2>
                        <ul className="column__section__list">
                            {learning.map(technology => (
                                <li className="list-element">
                                    <div className="technology">
                                        <img src={technology.logo} className='technology__image' alt='profile img' />
                                        <h3 className="technology__name">{technology.name}</h3>
                                    </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="content-right">
                    <div className="section">
                        <div className='section__header'>
                            <img src={profile} className='section__image' alt='profile img' />
                            <h3 className="section__title">Profile</h3>
                        </div>
                        <div className="section__content">
                        <p className='profile'>
                            Frontend developer with almost two years of experience in web development. During
                            last two years I found fullfi lment and joy while learing new technologies and frameworks. My experiences taught me that good frontend developer never stops learing and
                            seeks ways of self improvement. The most challenging project so far in whitch I took part
                            was a web applicaƟ on for IKEA Family (ikeafamily.eu). It experienced me in technologies
                            such as ReactJS, MobX, TypeScript, SASS and many more. Furthermore I learned how to
look for tools that can provide soluƟ ons for various problems encountered during commercial web development. I aspire to become a ReactJS developer, but any commercial experience with JavaScript frameworks and libraries are precious to me. Currently I am planning to learn NodeJs and develop an applicaƟ on using both React and Node.</p>
                        </div>
                        
                    </div>
                    <div className="section">
                        <div className='section__header'>
                            <img src={profile} className='section__image' alt='profile img' />
                            <h3 className="section__title">Experience</h3>

                        </div>
                    <div className="section__content">
                    <div className="experience-element">
                        <h3 className="experience-element__title">Any job you can think of</h3>
                        <span className="experience-element__date">march 2017 - august 2018</span>
                        <p className="experience-element__description">
                            <span className="description-header">Responsibilities:</span>
                            <span className="description-content">&nbsp;
                                Preparing PSD based front-end, estimating tasks, maintaining web applications
                            </span>
                        </p>
                        <p className="experience-element__description">
                            <span className="description-header">Tooling:</span>
                            <span className="description-content">&nbsp;
                                Preparing PSD based front-end, estimating tasks, maintaining web applications
                            </span>
                        </p>
                    </div>
                    </div>
                    
                        
            </div>
            <div className="section">
                <div className='section__header'>
                    <img src={profile} className='section__image' alt='profile img' />
                    <h3 className="section__title">Profile</h3>
                </div>
            </div>
                </div>
            </div >
        </main >
    )
}

export default Page;