'use client';

import {useState} from 'react';
import './Header.scss';
import Link from 'next/link';
const Header = () => {
	const rightImage = {backgroundImage: `url(${''})`};
	const [hamOpen, setHamOpen] = useState(false);
	return (
		<header className="header">
			<div className="container-fluid">
				<div className="header__logo-svg d-flex justify-content-between">
					<div className="logo">
						<Link href={'/'}>{/* <img src={logo} className="logo__img" alt="logo" /> */}</Link>
					</div>
					<svg
						onClick={() => setHamOpen(!hamOpen)}
						className={`ham hamRotate ham1 ${hamOpen ? `active` : ''}`}
						viewBox="0 0 100 100"
					>
						<path
							className="line top"
							d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
						/>
						<path className="line middle" d="m 30,50 h 40" />
						<path
							className="line bottom"
							d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
						/>
					</svg>
				</div>

				<div className={`header__navigation d-flex ${hamOpen ? `show` : ''}`} id="home">
					<div className="col-md-6 left">
						<nav className="menu text-start">
							<ul>
								<li>
									<Link href="/" onClick={() => setHamOpen(!hamOpen)}>
										home
									</Link>
								</li>
								<li>
									<Link href="/about" onClick={() => setHamOpen(!hamOpen)}>
										about
									</Link>
								</li>
								<li>
									<Link href="/portfolio" onClick={() => setHamOpen(!hamOpen)}>
										PortFolio
									</Link>
								</li>
								<li>
									<Link href="/blogs" onClick={() => setHamOpen(!hamOpen)}>
										Blogs
									</Link>
								</li>

								<li>
									<Link href="/contact" onClick={() => setHamOpen(!hamOpen)}>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-md-6 right" style={rightImage}></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
