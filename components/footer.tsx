'use client'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useRouter } from "next/navigation"
import { useLanguage } from './LanguageProvider'
import { getLocalizedPath } from '@/lib/i18n'

export default function Footer() {
    const router = useRouter()
    const { localeSegment, t } = useLanguage()
  return (
    
<footer id="footer" className="footer dark-background bg-dark-blue">
  
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-6 col-md-6 footer-about">

          <div className="col-lg-6 col-md-3 footer-links">
            <h4>{t.common.usefulLinks}</h4>
            <ul>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'home'))}>Virtutis Energy</button></li>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'workWithUs'))}>{t.common.workWithUs}</button></li>
              <li><button onClick={() => router.push(getLocalizedPath(localeSegment, 'privacy'))}>{t.common.privacy}</button></li>
              <li><button onClick={() => router.push("https://api.whatsapp.com/send?phone=558582351512")}>{t.common.contact}</button></li>
            </ul>
          </div>

          <div className="social-links d-flex mt-4 ">
            <a href="https://www.instagram.com/virtutisenergy" target="_blank">
            <BsInstagram size={24} />
            </a>

            <a href="https://www.linkedin.com/company/virtutis-energy/" target="_blank">
            <BsLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-contact col mb-5">
          <h4>{t.common.address}</h4>
          <p>{t.footer.addressLine1}</p>
          <p>{t.footer.addressLine2}</p>
          <p>{t.footer.addressLine3}</p>
          <p>{t.footer.addressLine4}</p>
          <p className="mb-4">{t.footer.taxId}</p>
          <img src="/img/LOGO_white.png" className="logo-tec"/>
        </div>
       
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Virtutis Energy</strong> <span>{t.common.allRightsReserved}</span></p>

    </div>

  </footer>

  )
}
