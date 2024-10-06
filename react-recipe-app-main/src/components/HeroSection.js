import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/SwissRole.jpeg",
        "/img/gallery/hotCrossBun.jpeg",
        "/img/gallery/FruitCake.jpeg",
        "/img/gallery/Focaccia.jpeg",
        "/img/gallery/CinnamonBuns.jpeg",
        "/img/gallery/ChocolateCreameFingures.jpeg",
        "/img/gallery/Bun.jpeg",
        "/img/gallery/BreadedBread.jpeg",
        "/img/gallery/BlackForestCake.jpeg"
    ];
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/img/Resume/Rekha_Upadhyay_Resume.pdf';  
        link.download = 'Rekha_Upadhyay_Resume.pdf';
        link.click();
      };
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">About Me</h1>
                <p className="info">Enthusiastic baker graduating in April 2025 with a Diploma in Bakery and Patisserie from <b>Symbiosis School of Culinary Arts</b>. Experienced in crafting artisan breads, pastries, cakes, tarts, and cookies. Strong foundation in bakery theory, practical techniques, food safety, and equipment maintenance. Skilled in food costing and recipe development. Motivated to bring creativity, attention to detail, and time management to a professional bakery. Seeking an entry-level baker role to grow and contribute to a dynamic team.</p>
                <button className="btn" onClick={handleDownload}>Hire Me</button>
            </div>
            <div className="col gallery">
                <img src={"/img/top-chiefs/rekha.jpeg"} alt="" className="img" id="main-chef-image"/>
            </div>
        </div>
    )
}