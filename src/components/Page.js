import './Page.scss'
import profile from '../images/profile.jpg'
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
                    <span>Bacon ipsum dolor amet andouille jerky biltong pork loin turkey meatball pancetta kevin chislic. Ham hock meatloaf flank pig ham ground round short ribs doner bresaola kielbasa hamburger chuck rump strip steak andouille. Pork chop tri-tip drumstick chuck. Biltong tri-tip sausage sirloin. Cupim chicken ground round boudin meatball. Strip steak bresaola meatloaf alcatra short ribs</span>
                </div>
                <div className="content-right">
                    <div className="section">
                        <div className='section__header'>
                            <img src={profile} className='section__image' alt='profile img' />
                            <h3 className="section__title">Profile</h3>
                        </div>
                        <p className='section__content'>
                            Frontend developer with almost two years of experience in web development. During
                            last two years I found fullfi lment and joy while learing new technologies and frameworks. My experiences taught me that good frontend developer never stops learing and
                            seeks ways of self improvement. The most challenging project so far in whitch I took part
                            was a web applicaƟ on for IKEA Family (ikeafamily.eu). It experienced me in technologies
                            such as ReactJS, MobX, TypeScript, SASS and many more. Furthermore I learned how to
look for tools that can provide soluƟ ons for various problems encountered during commercial web development. I aspire to become a ReactJS developer, but any commercial experience with JavaScript frameworks and libraries are precious to me. Currently I am planning to learn NodeJs and develop an applicaƟ on using both React and Node.</p>
                    </div>
                    <div className="section">
                        <div className='section__header'>
                            <img src={profile} className='section__image' alt='profile img' />
                            <h3 className="section__title">Profile</h3>
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