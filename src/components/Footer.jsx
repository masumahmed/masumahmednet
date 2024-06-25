import { Link } from 'react-router-dom';

function Footer() {
    return <>
        <div id="footer">
            <ul>
                <div className="section">
                    <li>All rights reserved</li>
                    <li>© masumahmed.net {new Date().getFullYear()}</li>
                </div>
                <div className="section">
                    <li><a href="https://github.com/masumahmed" target="__blank">Github</a></li>
                    <li><a href="https://leetcode.com/masumahmed" target="__blank">LeetCode</a></li>
                    <li><a href="https://www.hackerrank.com/masumahmed" target="__blank">HakerRank</a></li>
                    <li><a href="https://linkedin.com/in/masum-ahmed" target="__blank">LinkedIn</a></li>
                    <li><Link to="/resume">Résumé</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
                <div className="section">
                    <li>Made with <span role="img" aria-label="purple heart emoji">💜</span> and React by Masum Ahmed</li>
                </div>
            </ul>
        </div>
    </>
}

export default Footer;
