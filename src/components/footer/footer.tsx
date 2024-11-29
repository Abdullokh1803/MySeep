import classes from "./footer.module.scss";
import FooterNav from "./footer_nav";
import FooterBottom from "./footer_bottom";
import FooterInformation from "./footer_information";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <FooterNav />
          <FooterInformation />
          <div className={`${classes.bottom}`}>
            <FooterBottom />
          </div>
        </div>
      </div>
    </div>
  );
}
