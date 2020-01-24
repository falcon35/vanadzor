import React from 'react'
import styled from 'styled-components'

 function Footer() {
    return (
        <FooterContainer>
            <div className="footer-meddle">
            <div className="container">
   <div className="row">
       <div className="col-md-3 col-sm-6">
       <h4>Lorem ipsum</h4>
       <ul className="list-unstyled">
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
       </ul>
       </div>
       <div className="col-md-3 col-sm-6">
       <h4>Lorem ipsum</h4>
       <ul className="list-unstyled">
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       </ul>
       </div>
       <div className="col-md-3 col-sm-6">
       <h4>Lorem ipsum</h4>
       <ul className="list-unstyled">
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       </ul>
       </div>
       <div className="col-md-3 col-sm-6">
       <h4>Lorem ipsum</h4>
       <ul className="list-unstyled">
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       <li><a href="/">lorem ipsum</a></li>
       </ul>
       </div>
   </div>
         <div className="footer-bottom">
            <p className="text-xs-center" >
           &copy;{new Date().getFullYear()} Dogs- All right reserved   
            </p>
             </div>   
             </div>
        </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer=styled.footer`
.footer-meddle{
    background: var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite);
}

.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
}

ul li a{
    color:var(--mainGrey);
}

ul li a:hover{
    color:var(--mainLightGrey);
}
`;