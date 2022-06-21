import * as React from 'react'
import Page from '../components/Page'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'

export default function TermsAndConditionsPage() {
  return (
    <Page
      pageName="Terms And Conditions"
      pageDescription={`Terms and Conitions for Captivate Lighting and Visual Synth`}
    >
      <Section>
        <H2>Terms And Conditions</H2>
        <H4>1. Have Fun</H4>
        <P>This is non-negotiable.</P>
        <H4>2. Accept The Risks of Using Beta Software</H4>
        <P>
          Captivate is beta software and is undergoing active development. The
          software may not work reliably or at all. Features are subject to
          change without notice. Use at your own risk.
        </P>
        <H4>3. Don't Sue Me</H4>
        <P>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </P>
      </Section>
    </Page>
  )
}
