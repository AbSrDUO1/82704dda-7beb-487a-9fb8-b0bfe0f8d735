"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Memesite Futuristic SaaS"
          buttonText="Start Free Trial"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Memesite"
          subtitle="The future of SaaS solutions for your needs"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Connect with Us"
          descriptions={[
            'Join our community on socials!',
            'Follow us for the latest updates!',
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'Create an account', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Connect your wallet', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Purchase your assets', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Details on supply, liquidity, and more"
          kpiItems={[
            { value: '1M', description: 'Total Supply', longDescription: 'The total number of tokens in circulation.', icon: 'DollarSign' },
            { value: '500k', description: 'Liquidity', longDescription: 'Liquidity available for trading.', icon: 'Layers' },
            { value: '30%', description: 'Taxes', longDescription: 'Transaction tax for sustainability.', icon: 'Shield' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Memesite"
          logoText="Memesite Futuristic"
          className="grid grid-cols-3"
        />
      </div>
    </SiteThemeProvider>
  );
}