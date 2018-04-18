import React from 'react';
import TeamMember from './TeamMember';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>

          <p>MENAX is the first truly decentralized P2P cryptocurrency exchange tailored for the Middle East & North Africa region. We designed this platform exclusively around the end user's security with no compromise to performance. Built on the Ethereum blockchain, MENAX provides unmatched efficiency and privacy.</p>

          <div id="team-members" className="row">
             
           

           

            

            <TeamMember id="you" name="You?"
              description={
                <div>
                  <p>We are actively hiring for the menax dream team. We are especially on the lookout for talented developers, marketing personnel, a community manager and content writers.</p>
                  <p>Drop us a line at <a href="mailto:info@menax.org">info@menax.org</a>.</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
