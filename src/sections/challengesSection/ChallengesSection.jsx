import React from 'react';
import { ChallengeCard } from './ChallengeCard';
import withoutCRMImage from '../../assets/images/without-crm.png';
import withCRMImage from '../../assets/images/with-crm.png';
import biDirectionalIcon from '../../assets/images/bi-directional-image.png';
import enrichmentIcon from '../../assets/images/adobe-express.png';
import overlayIcon from '../../assets/images/crm-overlay-image.png';
import aiResponseIcon from '../../assets/images/brain-image.png';
import crmIcon from '../../assets/images/crm-image.png';
import curvedArrow from '../../assets/images/curved-arrow.png';
import './ChallengesSection.css';

export const ChallengesSection = () => {
  // Data for the "Without LeadCRM" card
  const withoutData = [
    {
      title: 'Manual Data Entry',
      subtitle: '3+ Hours wasted daily',
      description: 'Copying LinkedIn contacts to CRM manually plus losing conversation history'
    },
    {
      title: 'Incomplete Data',
      subtitle: '60% Data Incomplete',
      description: 'LinkedIn profiles missing Email and Phones from 700M+ Database'
    },
    {
      title: 'No CRM Visibility',
      subtitle: 'Zero context available',
      description: "Can’t see existing CRM contacts when browsing LinkedIn profiles"
    },
    {
      title: 'Limited Productivity',
      subtitle: 'No smart assistance',
      description: 'Writing messages manually plus no AI assistant for reply, Invite or comments.'
    }
  ];

  // Data for the "With LeadCRM" card
  const withData = [
    {
      title: 'Complete Bi-Directional Sync',
      description:'Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.',
      icon: biDirectionalIcon
    },
    {
      title: '700M+ Contacts + Enrichment',
      description: 'Get verified emails and phone numbers from a vast global database.',
      icon: enrichmentIcon
    },
    {
      title: 'CRM Overlay on LinkedIn',
      description: 'See full CRM insights directly on LinkedIn profiles without switching tabs.',
      icon: overlayIcon
    },
    {
      title: 'AI Response + Templates + Bulk Exports',
      description: 'Save time with AI-crafted replies, pre-built templates, and one-click data exports.',
      icon: aiResponseIcon
    }
  ];

  return (
    <section className="challenges-container">
      <h2 className="challenges-title">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="comparison-wrapper">
        <ChallengeCard
          headerText="LinkedIn Prospector"
          subtitle="Without LeadCRM"
          // savedTime="4+ hours/day wasted"
          items={withoutData}
          isPositive={false}
          imageSrc={withoutCRMImage}
        />

        <div className="vs-divider">VS</div>

        <ChallengeCard
          headerText="Sync with CRM"
          subtitle="With LeadCRM"
          savedTime="4+ Hours/day Saved"
          items={withData}
          isPositive={true}
          imageSrc={withCRMImage}
          logo={crmIcon}
        />
      </div>

      <div className="cta-container">
        <div className="cta-wrapper">
          <button className="cta-button">Start Using LeadCRM Now</button>

          <div className="cta-decorative">
          <img 
  src={curvedArrow} 
  alt="Curved arrow" 
  className="cta-arrow-icon" 
/>
            <p className="cta-promo-text">
              Save 40+ hours <br />
              <span>every Month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};