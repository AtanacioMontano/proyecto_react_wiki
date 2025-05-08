const HeroImage = () => {
    return (
        <section id="hero" className="w-[26rem] bg-hero rounded-tl-xl rounded-bl-xl flex">
            <article className="my-8 md:my-16 px-8 md:px-16 flex flex-col place-content-between">
                <header>
                    <figure>
                        {/* Logo SRVNUI */}
                    </figure>
                    <h3 className="text-3xl text-secondary font-semibold">Sistema de</h3>
                    <h2 className="text-4xl text-secondary font-semibold">Rentas Vitalicias</h2>
                </header>
                <footer>
                    <small className="text-sm">Sistema Operaciones Rentas Privadas.</small>
                    <small className="text-sm">1.2024.12.1.</small>
                    <figure>
                        {/* Logo BENLAR */}
                    </figure>
                </footer>
            </article>
        </section>
    );
};

export default HeroImage;