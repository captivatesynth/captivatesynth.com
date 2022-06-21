import * as React from 'react'
import Page from '../components/Page'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'
import styled from 'styled-components'
import ComputerIcon from '@mui/icons-material/Computer'
import UsbIcon from '@mui/icons-material/Usb'
import PianoIcon from '@mui/icons-material/Piano'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

const COMPUTER_LINK = 'computer'
const USB_DMX_LINK = 'usb-dmx-adaptor'
const MIDI_CONTROLLERS_LINK = 'midi-controllers'
const DMX_LIGHTS_LINK = 'dmx-lights'

export default function RecommendedEquipmentPage() {
  return (
    <Page
      pageName="Recommended Equipment"
      pageDescription={`Recommended equipment to compliment Captivate Lighting and Visual Synth`}
    >
      <Section>
        <H2>Recommended Equipment</H2>
        <P>Equipment ideas to get the most out of captivate</P>
        {header('Computer', ComputerIcon, COMPUTER_LINK)}
        <P>Captivate runs on MacOS 10.11 (El Capitan) and up.</P>
        <P>
          It is recommended to run Captivate on an Apple Silicon Mac, since
          these machines provide a great combination of multi-core and graphics
          processing power for their price.
        </P>
        <AASection>
          <AALink
            title="Base Macbook Air"
            blurb="M1 Macbook Air with 256 GB SSD and 8GB RAM. Good for lighting and simple visualizations with minimal effects"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B08N5KWB9H&asins=B08N5KWB9H&linkId=296d7e995fbd7e50d25834f49dc701cd&show_border=true&link_opens_in_new_window=true"
          />
          <AALink
            title="Better Macbook Air"
            blurb="M1 Macbook Air with 512 GB SSD and 16GB RAM. Good for lighting and simple visualizations with minimal effects. Additional Storage for videos & images."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B08YCXXJFV&asins=B08YCXXJFV&linkId=af9e75e3fc5ccd5e058d6d94cdf50a42&show_border=true&link_opens_in_new_window=true"
          />
          <AALink
            title="Base Macbook Pro"
            blurb="M1 Macbook Pro with 512 GB SSD and 16GB RAM. Good for lighting and complex visualizations with more effects"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B09JQSLL92&asins=B09JQSLL92&linkId=58170f050625e85e7fb12dd97dc4544d&show_border=true&link_opens_in_new_window=true"
          />
          <AALink
            title="Better Macbook Pro"
            blurb="M1 Macbook Pro with 1 TB SSD and 32GB RAM. Good for lighting and complex visualizations with the most effects"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B09MGGD6XH&asins=B09MGGD6XH&linkId=ca80611069adaf09445cb90caa2904f2&show_border=true&link_opens_in_new_window=true"
          />
        </AASection>
        {header('USB-DMX Adaptor', UsbIcon, USB_DMX_LINK)}
        <P>
          Captivate is designed to work with the{' '}
          <LightLink href="https://www.enttec.com/product/lighting-communication-protocols/dmx512/dmx-usb-pro/">
            ENNTEC USB Pro
          </LightLink>{' '}
          or the{' '}
          <LightLink href="https://dmxking.com/usbdmx/ultradmxmicro">
            DMX King Ultra DMX Micro
          </LightLink>
        </P>
        <Note>
          Note: Due to the global chip shortage, the DMX King Ultra DMX Micro is
          very difficulty to find. And the Enntec USB DMX Pro is rather
          expensive. We are working on a dedicated Captivate USB-DMX device to
          make it even cheaper to get started using Captivate
        </Note>
        <AASection>
          <AALink
            title="Enntec DMX USB Pro"
            blurb="A reliable DMX USB Adaptor sending a DMX signal from a computer running captivate"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B077VW1DJH&asins=B077VW1DJH&linkId=edab558774c8ac15fbf4e20371e4f849&show_border=false&link_opens_in_new_window=true"
          />
        </AASection>
        {header('Midi Controllers', PianoIcon, MIDI_CONTROLLERS_LINK)}
        <AASection>
          <AALink
            title="Akai MPK Mini"
            blurb="A popular, very portable midi controller with a good variety of controls."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B0886ZPWC8&asins=B0886ZPWC8&linkId=2502abc10d226891f4dd54d45f45a063&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Arturia Minilab MkII"
            blurb="A less portable, sturdier midi controller with a good variety of controls"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B01MSNIVKE&asins=B01MSNIVKE&linkId=3c5da2472a7ebe495fa71f0163a53a0f&show_border=false&link_opens_in_new_window=true"
          />
        </AASection>

        {header('DMX Lights', LightbulbIcon, 'dmx-lights', DMX_LIGHTS_LINK)}
        <AASection>
          <AALink
            title="Derby Light"
            blurb="Derby Lights provide great ambiance to a set with very little effort."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B00T77SHA2&asins=B00T77SHA2&linkId=4386b23c3a00252c32e3eb85d8489e86&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Derby Light"
            blurb="Derby Lights provide great ambiance to a set with very little effort."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B011QEVO44&asins=B011QEVO44&linkId=6118fd31127a153473775d9c580d9185&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Par Light"
            blurb="Add beautiful wash lighting to a set. Integrates with Captivate very well."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B07RZ7HRM9&asins=B07RZ7HRM9&linkId=a980b55285fe0468199c9cf558582e9e&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Par Lights"
            blurb="Add beautiful wash lighting to a set. Integrates with Captivate very well."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B07G45C8ZK&asins=B07G45C8ZK&linkId=2c04df2b8464c6abfc241aa57ffff460&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Light Bar"
            blurb="Add intensity & strobe to a set"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B083TT7FY5&asins=B083TT7FY5&linkId=7824d9139e3a976b11b5b2c21f8e9a7d&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Moving Head Lights"
            blurb="Add motion and sophistication to a set"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B0836CXMW6&asins=B0836CXMW6&linkId=9487de86c9486b9973446c73b38aa814&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Multi-Channel Dimmer"
            blurb="Allows you to control any dimmable 120v light fixture as a part of your DMX universe. Great for christmas lights, string lights, edison bulbs, and even lamps."
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B000WKY4C8&asins=B000WKY4C8&linkId=13d13d24a542de7648894a47941f9b4c&show_border=false&link_opens_in_new_window=true"
          />
          <AALink
            title="Haze Machine"
            blurb="Pretty much all lights looks better in haze. Add incredible depth & volume to a set by filling the air with haze"
            src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=spensersaling-20&language=en_US&marketplace=amazon&region=US&placement=B073ZY4X5V&asins=B073ZY4X5V&linkId=37c16c59a6d1f6c78da478204f1d8aa3&show_border=true&link_opens_in_new_window=true"
          />
        </AASection>
      </Section>
    </Page>
  )
}

function header(title, Icon, link) {
  return (
    <H4 style={{ display: 'flex', alignItems: 'center' }}>
      <Icon fontSize="inherit" style={{ marginRight: '1rem' }} />
      {title}
    </H4>
  )
}

const AASection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

function AALink({ title, blurb, src }) {
  return (
    <AAWrapper>
      <AALeft>
        <AAHeader>{title}</AAHeader>
        <AABlurb>{blurb}</AABlurb>
      </AALeft>
      <iframe
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: '120px', height: '240px' }}
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        src={src}
      ></iframe>
    </AAWrapper>
  )
}

const AAWrapper = styled.div`
  display: flex;
  box-shadow: 0 0 0.5rem 0 #0001;
  border: 1px solid #00000055;
  max-width: 30rem;
  flex: 1 1 auto;
  margin: 0.5rem;
  /* padding: 1rem; */
`

const AALeft = styled.div`
  padding: 0.7rem;
  flex: 1 1 auto;
`

const AAHeader = styled.h5`
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 1.5rem;
`

const AABlurb = styled.div`
  font-size: 0.9rem;
  color: #00000077;
`

const Note = styled.p`
  color: #0009;
  font-size: 0.9rem;
`

const LightLink = styled.a`
  color: #aaf;
`
