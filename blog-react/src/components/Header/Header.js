import * as React from 'react';
import imgProfile from '../../assets/img/myimg/perfil.jpeg';

const Header = () => {
    return (
        <header>
            <section className="header-icons-container">
                <div className="icons">
                    <a href="https://github.com/Johnssther"><span className="flaticon-003-whatsapp"></span></a> {/* Twitter */}
                    <a href="https://www.linkedin.com/in/john-alejandro-hernandez-3b28827a/"><span className="flaticon-010-linkedin"></span></a> {/* Linkendlin */}
                    <a href="assets/CV John Alejandro.pdf"><span className="flaticon-001-facebook"></span></a> {/* Facebook */}
                </div>
            </section>
            <nav>
                <section className="nav-logo-container">
                    <div className="nav-logo-container-image">
                        <a href="index.html">
                            <img src={imgProfile} alt="Foto de perfil de John Alejandro"></img>
                        </a>
                    </div>
                </section>
                <section className="profile-link">
                    <a href="profile.html">Sobre mi</a>
                </section>
            </nav>
        </header>
    );
};
export default Header;