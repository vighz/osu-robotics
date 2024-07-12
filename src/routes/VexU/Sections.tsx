/* Noah Klein */

import './TeamDisplay'

import './Sections.css';
import TeamDisplay from './TeamDisplay';

interface SectionProps {
    children?: React.ReactNode[] | React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <div className="Section">
            {children}
        </div>
    )
}

export const AboutUs = () => {
    return (
        <div className="AboutUs">
            <Section>
                <h2>About us</h2>
                <p>
                    The VEX U Robotics Organization at Ohio State, or BUCKS, is comprised primarily of past V5RC competitors in the state of Ohio.
                    Our teams have collectively won the Ohio State Competition 10 times.
                    <br />
                    <br />
                    BUCKS is comprised of members from V5RC teams:
                </p>

                <TeamDisplay teams={teams} />


                <p>Our members have consistently been some of the best in the world, and we're excited to compete again.</p>

            </Section>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="Footer">
            <h3>Interested in joining or sponsoring us?</h3>
            <p>Reach out!</p>
            <a target="_blank" href="mailto:bucks.robotics.osu@gmail.com">bucks.robotics.osu@gmail.com</a>
        </div>
    )
}

const teams = [
    {
        name: '2011B',
        tournamentChampion: 0,
        excellence: 0,
        design: 0,
        skillsChampion: 0,
        otherAwards: 0
    },
    {
        name: '2011E',
        tournamentChampion: 3,
        excellence: 1,
        design: 2,
        skillsChampion: 1,
        otherAwards: 7
    },
    {
        name: '2011F',
        tournamentChampion: 22,
        excellence: 2,
        design: 0,
        skillsChampion: 5,
        otherAwards: 9
    },
    {
        name: '11124R',
        tournamentChampion: 13,
        excellence: 7,
        design: 4,
        skillsChampion: 7,
        otherAwards: 24
    },
    {
        name: '60883D',
        tournamentChampion: 10,
        excellence: 9,
        design: 1,
        skillsChampion: 17,
        otherAwards: 9
    }
]
