/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { FooterStyles, FooterInner, FooterGrid, FooterBlock, Form, FormFields, MenuFooter,} from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles data-scroll-section>
      <FooterInner>
        <FooterGrid>
          <FooterBlock>
            <h2>
              GET UPDATES ON NEW STUFF <br /> YOU PROBABLY WANT TO KNOW <br />{' '}
              ABOUT IN YOUR INBOX.
            </h2>

            <Form>
              <FormFields>
                <div className="control-g">
                  <div className="control">
                    <label htmlFor="email-footer" className="control-label">
                      {/* Email Address */}
                      <input
                        id="email-footer"
                        type="text"
                        className="footer-input"
                        inputMode="email"
                        typeof="email"
                        autoComplete="email"
                        placeholder="Your@Email.com"
                      />
                    </label>
                    <button type="submit" className="button button--skoll">
                      <svg
                        viewBox="0 0 23 26"
                        fill="none"
                        className="arrow-svg"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.9774 0C11.9774 6.99683 16.6409 12.6586 22.404 12.6586"
                          stroke="var(--button-black)"
                          strokeMiterlimit="10"></path>
                        <path
                          d="M22.4044 12.6582C16.6412 12.6582 11.9778 18.32 11.9778 25.3168"
                          stroke="var(--button-black)"
                          strokeMiterlimit="10"></path>
                        <path
                          d="M19.4041 12.6582H0"
                          stroke="var(--button-black)"
                          strokeMiterlimit="10"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </FormFields>
            </Form>
          </FooterBlock>

          <FooterBlock>
            <h2>Shop</h2>
            <MenuFooter>
              <li>
                <Link href="/">
                  <a className="link link--metis">Everything</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">Candles</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="link link--metis">Perfume Oils</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <h2>Info</h2>
            <MenuFooter>
              <li>
                <Link href="/about">
                  <a className="link link--metis">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="link link--metis">FAQ & Returns</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="link link--metis">Terms & Privacy</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>

          <FooterBlock>
            <h2>Social</h2>
            <MenuFooter>
              <li>
                <Link href="/about">
                  <a className="link link--metis">Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="link link--metis">Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="link link--metis">Facebook</a>
                </Link>
              </li>
            </MenuFooter>
          </FooterBlock>
        </FooterGrid>
      </FooterInner>

      <FooterGrid>
        <h2 className="fn6 hide-for-mobile">FIVENSIX</h2>
      </FooterGrid>
    </FooterStyles>
  );
}

