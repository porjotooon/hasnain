import React from 'react'
import styled from 'styled-components'
import splash from '../icons/splashnotun.svg'
import './Animation.css'
import { About, Description } from '../styles'
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import '../pages/Proj.css'
import './footer.css';
import git from '../icons/github.png';
import link from '../icons/linkedin.png';
//Framer Motion
import {motion} from 'framer-motion'

const AboutSection = () => {
    return(
      <>
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Hi there, I am Nafis, a</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}><span>Frontend Web</span> developer</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>and <span>UX/UI</span> designer.</motion.h2>
                    </Hide>
                </motion.div>
                    <motion.p variants={fade}>Based in Waterloo, ON, CA</motion.p>                
            </Description>
            <Image>
                {/*<img src={home1} alt="camera guy"*/}




                <svg width="auto" height="350" viewBox="0 0 779 485" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="animate">
<path id="Vector" d="M754.5 30C758.09 30 761 26.866 761 23C761 19.134 758.09 16 754.5 16C750.91 16 748 19.134 748 23C748 26.866 750.91 30 754.5 30Z" fill="#0F0E05"/>
<path id="Vector_2" d="M729.5 30C733.09 30 736 26.866 736 23C736 19.134 733.09 16 729.5 16C725.91 16 723 19.134 723 23C723 26.866 725.91 30 729.5 30Z" fill="#0F0E05"/>
<path id="Vector_3" d="M704.5 30C708.09 30 711 26.866 711 23C711 19.134 708.09 16 704.5 16C700.91 16 698 19.134 698 23C698 26.866 700.91 30 704.5 30Z" fill="#0F0E05"/>
<path id="Vector_4" d="M679.5 30C683.09 30 686 26.866 686 23C686 19.134 683.09 16 679.5 16C675.91 16 673 19.134 673 23C673 26.866 675.91 30 679.5 30Z" fill="#0F0E05"/>
<path id="Vector_5" d="M754.5 58C758.09 58 761 54.866 761 51C761 47.134 758.09 44 754.5 44C750.91 44 748 47.134 748 51C748 54.866 750.91 58 754.5 58Z" fill="#0F0E05"/>
<path id="Vector_6" d="M729.5 58C733.09 58 736 54.866 736 51C736 47.134 733.09 44 729.5 44C725.91 44 723 47.134 723 51C723 54.866 725.91 58 729.5 58Z" fill="#0F0E05"/>
<path id="Vector_7" d="M704.5 58C708.09 58 711 54.866 711 51C711 47.134 708.09 44 704.5 44C700.91 44 698 47.134 698 51C698 54.866 700.91 58 704.5 58Z" fill="#0F0E05"/>
<path id="Vector_8" d="M679.5 58C683.09 58 686 54.866 686 51C686 47.134 683.09 44 679.5 44C675.91 44 673 47.134 673 51C673 54.866 675.91 58 679.5 58Z" fill="#0F0E05"/>
<path id="Vector_9" d="M754.5 86C758.09 86 761 83.0899 761 79.5C761 75.9101 758.09 73 754.5 73C750.91 73 748 75.9101 748 79.5C748 83.0899 750.91 86 754.5 86Z" fill="#0F0E05"/>
<path id="Vector_10" d="M729.5 86C733.09 86 736 83.0899 736 79.5C736 75.9101 733.09 73 729.5 73C725.91 73 723 75.9101 723 79.5C723 83.0899 725.91 86 729.5 86Z" fill="#0F0E05"/>
<path id="Vector_11" d="M704.5 86C708.09 86 711 83.0899 711 79.5C711 75.9101 708.09 73 704.5 73C700.91 73 698 75.9101 698 79.5C698 83.0899 700.91 86 704.5 86Z" fill="#0F0E05"/>
<path id="Vector_12" d="M679.5 86C683.09 86 686 83.0899 686 79.5C686 75.9101 683.09 73 679.5 73C675.91 73 673 75.9101 673 79.5C673 83.0899 675.91 86 679.5 86Z" fill="#0F0E05"/>
<path id="Vector_13" d="M754.5 114C758.09 114 761 111.09 761 107.5C761 103.91 758.09 101 754.5 101C750.91 101 748 103.91 748 107.5C748 111.09 750.91 114 754.5 114Z" fill="#0F0E05"/>
<path id="Vector_14" d="M729.5 114C733.09 114 736 111.09 736 107.5C736 103.91 733.09 101 729.5 101C725.91 101 723 103.91 723 107.5C723 111.09 725.91 114 729.5 114Z" fill="#0F0E05"/>
<path id="Vector_15" d="M704.5 114C708.09 114 711 111.09 711 107.5C711 103.91 708.09 101 704.5 101C700.91 101 698 103.91 698 107.5C698 111.09 700.91 114 704.5 114Z" fill="#0F0E05"/>
<path id="Vector_16" d="M679.5 114C683.09 114 686 111.09 686 107.5C686 103.91 683.09 101 679.5 101C675.91 101 673 103.91 673 107.5C673 111.09 675.91 114 679.5 114Z" fill="#0F0E05"/>
<path id="Vector_17" d="M754.5 143C758.09 143 761 139.866 761 136C761 132.134 758.09 129 754.5 129C750.91 129 748 132.134 748 136C748 139.866 750.91 143 754.5 143Z" fill="#0F0E05"/>
<path id="Vector_18" d="M729.5 143C733.09 143 736 139.866 736 136C736 132.134 733.09 129 729.5 129C725.91 129 723 132.134 723 136C723 139.866 725.91 143 729.5 143Z" fill="#0F0E05"/>
<path id="Vector_19" d="M704.5 143C708.09 143 711 139.866 711 136C711 132.134 708.09 129 704.5 129C700.91 129 698 132.134 698 136C698 139.866 700.91 143 704.5 143Z" fill="#0F0E05"/>
<path id="Vector_20" d="M679.5 143C683.09 143 686 139.866 686 136C686 132.134 683.09 129 679.5 129C675.91 129 673 132.134 673 136C673 139.866 675.91 143 679.5 143Z" fill="#0F0E05"/>
<path id="Vector_21" d="M754.5 171C758.09 171 761 167.866 761 164C761 160.134 758.09 157 754.5 157C750.91 157 748 160.134 748 164C748 167.866 750.91 171 754.5 171Z" fill="#0F0E05"/>
<path id="Vector_22" d="M729.5 171C733.09 171 736 167.866 736 164C736 160.134 733.09 157 729.5 157C725.91 157 723 160.134 723 164C723 167.866 725.91 171 729.5 171Z" fill="#0F0E05"/>
<path id="Vector_23" d="M704.5 171C708.09 171 711 167.866 711 164C711 160.134 708.09 157 704.5 157C700.91 157 698 160.134 698 164C698 167.866 700.91 171 704.5 171Z" fill="#0F0E05"/>
<path id="Vector_24" d="M679.5 171C683.09 171 686 167.866 686 164C686 160.134 683.09 157 679.5 157C675.91 157 673 160.134 673 164C673 167.866 675.91 171 679.5 171Z" fill="#0F0E05"/>
<path id="Vector_25" d="M744.009 466C748.541 455.49 753.069 444.824 755.036 433.437C757.002 422.049 756.177 409.69 750.544 399.813C744.912 389.936 733.821 383.238 723.237 385.471C714.544 387.305 707.564 394.656 703.477 403.096C699.39 411.536 697.75 421.055 696.161 430.413C695.647 419.781 695.103 408.979 691.814 398.936C688.525 388.893 682.048 379.534 672.818 375.648C663.588 371.762 651.58 374.818 646.715 384.094C639.862 397.162 648.949 415.493 641.068 427.876C639.717 415.455 627.62 405.641 616.123 407.639C604.626 409.636 596.028 423.045 598.393 435.29C599.801 442.576 604.431 448.774 609.966 453.251C615.501 457.728 621.938 462.918 628.307 465.852L744.009 466Z" fill="url(#paint0_linear)"/>
<path id="Vector_26" d="M604.529 416.66C613.644 420.109 622.843 423.597 631.165 428.99C638.623 433.822 645.264 440.329 649.459 448.662C651.757 453.132 653.121 458.094 653.456 463.197C653.517 464.264 655.059 464.271 654.998 463.197C654.459 453.694 650.181 444.997 644.257 438.119C637.761 430.579 629.344 425.428 620.654 421.432C615.502 419.063 610.221 417.049 604.939 415.051C604 414.696 603.597 416.308 604.529 416.66H604.529Z" fill="#EED0D0"/>
<path id="Vector_27" d="M657.09 377.225C662.552 387.27 666.926 397.989 670.122 409.161C673.324 420.329 675.341 431.87 676.132 443.551C676.571 450.091 676.618 456.655 676.276 463.201C676.22 464.268 677.724 464.265 677.78 463.201C678.386 451.398 677.739 439.558 675.852 427.922C673.967 416.287 670.869 404.931 666.621 394.082C664.236 387.989 661.486 382.077 658.389 376.387C658.285 376.205 658.12 376.075 657.931 376.024C657.741 375.973 657.541 376.005 657.373 376.114C657.204 376.222 657.081 376.399 657.028 376.606C656.975 376.814 656.998 377.036 657.09 377.225Z" fill="#EED0D0"/>
<path id="Vector_28" d="M732.595 386.434C724.676 405.638 719.103 425.872 716.016 446.627C715.149 452.457 714.479 458.315 714.003 464.202C713.917 465.269 715.459 465.263 715.545 464.202C717.224 443.494 721.371 423.105 727.883 403.542C729.713 398.042 731.727 392.619 733.926 387.274C734.325 386.304 732.997 385.456 732.595 386.434Z" fill="#EED0D0"/>
<path id="Vector_29" d="M780.026 466H0.973876C0.715605 466 0.46791 465.895 0.285284 465.707C0.102658 465.52 6.10352e-05 465.265 6.10352e-05 465C6.10352e-05 464.735 0.102658 464.48 0.285284 464.293C0.46791 464.105 0.715605 464 0.973876 464H780.026C780.284 464 780.532 464.105 780.715 464.293C780.897 464.48 781 464.735 781 465C781 465.265 780.897 465.52 780.715 465.707C780.532 465.895 780.284 466 780.026 466Z" fill="#3F3D56"/>
<path id="Vector_30" d="M403.663 199H268.337C266.392 198.998 264.527 198.169 263.151 196.697C261.776 195.224 261.002 193.227 261 191.145V7.85526C261.002 5.77264 261.776 3.776 263.151 2.30336C264.527 0.830729 266.392 0.00236891 268.337 0H403.663C405.608 0.0023717 407.473 0.830734 408.849 2.30338C410.224 3.77603 410.998 5.77268 411 7.85531V191.145C410.998 193.227 410.224 195.224 408.849 196.697C407.473 198.169 405.608 198.998 403.663 199ZM268.337 1.74567C266.824 1.74748 265.374 2.39174 264.304 3.53713C263.234 4.68252 262.632 6.23548 262.63 7.85531V191.145C262.632 192.765 263.234 194.318 264.304 195.463C265.374 196.608 266.824 197.253 268.337 197.254H403.663C405.176 197.253 406.626 196.608 407.696 195.463C408.766 194.318 409.368 192.765 409.37 191.145V7.85531C409.368 6.23548 408.766 4.68254 407.696 3.53715C406.626 2.39176 405.176 1.74748 403.663 1.74567H268.337Z" fill="#3F3D56"/>
<path id="Vector_31" d="M324.344 88H294.656C293.687 87.9989 292.757 87.5891 292.072 86.8608C291.387 86.1324 291.001 85.1448 291 84.1147V46.8853C291.001 45.8552 291.387 44.8676 292.072 44.1393C292.757 43.4109 293.687 43.0011 294.656 43H324.344C325.313 43.0011 326.243 43.4109 326.928 44.1393C327.613 44.8676 327.999 45.8552 328 46.8853V84.1147C327.999 85.1448 327.613 86.1324 326.928 86.8608C326.243 87.5891 325.313 87.9989 324.344 88Z" fill="#6C63FF"/>
<path id="Vector_32" d="M382.344 106H352.656C351.687 105.999 350.757 105.58 350.072 104.835C349.387 104.091 349.001 103.081 349 102.028V63.9716C349.001 62.9186 349.387 61.9091 350.072 61.1646C350.757 60.42 351.687 60.0012 352.656 60H382.344C383.313 60.0012 384.243 60.42 384.928 61.1646C385.613 61.9091 385.999 62.9186 386 63.9716V102.028C385.999 103.081 385.613 104.091 384.928 104.835C384.243 105.58 383.313 105.999 382.344 106Z" fill="#CCCCCC"/>
<path id="Vector_33" d="M336.344 159H306.656C305.687 158.999 304.757 158.58 304.072 157.835C303.387 157.091 303.001 156.081 303 155.028V116.972C303.001 115.919 303.387 114.909 304.072 114.165C304.757 113.42 305.687 113.001 306.656 113H336.344C337.313 113.001 338.243 113.42 338.928 114.165C339.613 114.909 339.999 115.919 340 116.972V155.028C339.999 156.081 339.613 157.091 338.928 157.835C338.243 158.58 337.313 158.999 336.344 159Z" fill="#FF6584"/>
<path id="Vector_34" d="M113 19C116.314 19 119 16.0899 119 12.5C119 8.91015 116.314 6 113 6C109.686 6 107 8.91015 107 12.5C107 16.0899 109.686 19 113 19Z" fill="#0F0E05"/>
<path id="Vector_35" d="M113 46C116.314 46 119 43.0898 119 39.5C119 35.9101 116.314 33 113 33C109.686 33 107 35.9101 107 39.5C107 43.0898 109.686 46 113 46Z" fill="#0F0E05"/>
<path id="Vector_36" d="M113 73C116.314 73 119 69.866 119 66C119 62.134 116.314 59 113 59C109.686 59 107 62.134 107 66C107 69.866 109.686 73 113 73Z" fill="#0F0E05"/>
<path id="Vector_37" d="M113 100C116.314 100 119 96.866 119 93C119 89.134 116.314 86 113 86C109.686 86 107 89.134 107 93C107 96.866 109.686 100 113 100Z" fill="#0F0E05"/>
<path id="Vector_38" d="M139 19C142.314 19 145 16.0899 145 12.5C145 8.91015 142.314 6 139 6C135.686 6 133 8.91015 133 12.5C133 16.0899 135.686 19 139 19Z" fill="#0F0E05"/>
<path id="Vector_39" d="M139 46C142.314 46 145 43.0898 145 39.5C145 35.9101 142.314 33 139 33C135.686 33 133 35.9101 133 39.5C133 43.0898 135.686 46 139 46Z" fill="#0F0E05"/>
<path id="Vector_40" d="M139 73C142.314 73 145 69.866 145 66C145 62.134 142.314 59 139 59C135.686 59 133 62.134 133 66C133 69.866 135.686 73 139 73Z" fill="#0F0E05"/>
<path id="Vector_41" d="M139 100C142.314 100 145 96.866 145 93C145 89.134 142.314 86 139 86C135.686 86 133 89.134 133 93C133 96.866 135.686 100 139 100Z" fill="#0F0E05"/>
<path id="Vector_42" d="M165.5 19C169.09 19 172 16.0899 172 12.5C172 8.91015 169.09 6 165.5 6C161.91 6 159 8.91015 159 12.5C159 16.0899 161.91 19 165.5 19Z" fill="#0F0E05"/>
<path id="Vector_43" d="M165.5 46C169.09 46 172 43.0898 172 39.5C172 35.9101 169.09 33 165.5 33C161.91 33 159 35.9101 159 39.5C159 43.0898 161.91 46 165.5 46Z" fill="#0F0E05"/>
<path id="Vector_44" d="M165.5 73C169.09 73 172 69.866 172 66C172 62.134 169.09 59 165.5 59C161.91 59 159 62.134 159 66C159 69.866 161.91 73 165.5 73Z" fill="#0F0E05"/>
<path id="Vector_45" d="M165.5 100C169.09 100 172 96.866 172 93C172 89.134 169.09 86 165.5 86C161.91 86 159 89.134 159 93C159 96.866 161.91 100 165.5 100Z" fill="#0F0E05"/>
<path id="Vector_46" d="M191.5 19C195.09 19 198 16.0899 198 12.5C198 8.91015 195.09 6 191.5 6C187.91 6 185 8.91015 185 12.5C185 16.0899 187.91 19 191.5 19Z" fill="#0F0E05"/>
<path id="Vector_47" d="M191.5 46C195.09 46 198 43.0898 198 39.5C198 35.9101 195.09 33 191.5 33C187.91 33 185 35.9101 185 39.5C185 43.0898 187.91 46 191.5 46Z" fill="#0F0E05"/>
<path id="Vector_48" d="M191.5 73C195.09 73 198 69.866 198 66C198 62.134 195.09 59 191.5 59C187.91 59 185 62.134 185 66C185 69.866 187.91 73 191.5 73Z" fill="#0F0E05"/>
<path id="Vector_49" d="M191.5 100C195.09 100 198 96.866 198 93C198 89.134 195.09 86 191.5 86C187.91 86 185 89.134 185 93C185 96.866 187.91 100 191.5 100Z" fill="#0F0E05"/>
<path id="Vector_50" d="M218 19C221.314 19 224 16.0899 224 12.5C224 8.91015 221.314 6 218 6C214.686 6 212 8.91015 212 12.5C212 16.0899 214.686 19 218 19Z" fill="#0F0E05"/>
<path id="Vector_51" d="M218 46C221.314 46 224 43.0898 224 39.5C224 35.9101 221.314 33 218 33C214.686 33 212 35.9101 212 39.5C212 43.0898 214.686 46 218 46Z" fill="#0F0E05"/>
<path id="Vector_52" d="M218 73C221.314 73 224 69.866 224 66C224 62.134 221.314 59 218 59C214.686 59 212 62.134 212 66C212 69.866 214.686 73 218 73Z" fill="#0F0E05"/>
<path id="Vector_53" d="M218 100C221.314 100 224 96.866 224 93C224 89.134 221.314 86 218 86C214.686 86 212 89.134 212 93C212 96.866 214.686 100 218 100Z" fill="#0F0E05"/>
<path id="Vector_54" d="M244.5 19C248.09 19 251 16.0899 251 12.5C251 8.91015 248.09 6 244.5 6C240.91 6 238 8.91015 238 12.5C238 16.0899 240.91 19 244.5 19Z" fill="#0F0E05"/>
<path id="Vector_55" d="M244.5 46C248.09 46 251 43.0898 251 39.5C251 35.9101 248.09 33 244.5 33C240.91 33 238 35.9101 238 39.5C238 43.0898 240.91 46 244.5 46Z" fill="#0F0E05"/>
<path id="Vector_56" d="M244.5 73C248.09 73 251 69.866 251 66C251 62.134 248.09 59 244.5 59C240.91 59 238 62.134 238 66C238 69.866 240.91 73 244.5 73Z" fill="#0F0E05"/>
<path id="Vector_57" d="M244.5 100C248.09 100 251 96.866 251 93C251 89.134 248.09 86 244.5 86C240.91 86 238 89.134 238 93C238 96.866 240.91 100 244.5 100Z" fill="#0F0E05"/>
<path id="Vector_58" d="M176 475C198.644 475 217 455.301 217 431C217 406.699 198.644 387 176 387C153.356 387 135 406.699 135 431C135 455.301 153.356 475 176 475Z" fill="#2F2E41"/>
<path id="Vector_59" d="M160.747 459.945L140.835 470.648L146.401 482.577L166.312 471.874L160.747 459.945Z" fill="#2F2E41"/>
<path id="Vector_60" d="M149.026 481.366C150.206 479.444 147.292 475.146 142.517 471.766C137.741 468.386 132.912 467.205 131.731 469.127C130.551 471.049 133.465 475.347 138.241 478.727C143.016 482.107 147.845 483.289 149.026 481.366Z" fill="#2F2E41"/>
<path id="Vector_61" d="M191.862 459.945L186.296 471.874L206.208 482.577L211.773 470.648L191.862 459.945Z" fill="#2F2E41"/>
<path id="Vector_62" d="M214.368 478.727C219.144 475.347 222.058 471.049 220.877 469.127C219.696 467.204 214.868 468.386 210.092 471.766C205.316 475.146 202.402 479.444 203.583 481.366C204.764 483.289 209.592 482.107 214.368 478.727Z" fill="#2F2E41"/>
<path id="Vector_63" d="M173 435C180.732 435 187 428.284 187 420C187 411.716 180.732 405 173 405C165.268 405 159 411.716 159 420C159 428.284 165.268 435 173 435Z" fill="#EED0D0"/>
<path id="Vector_64" d="M165.204 420.337C170.02 416.261 175.465 422.311 171.796 427.663C166.98 431.739 161.535 425.689 165.204 420.337Z" fill="#3F3D56"/>
<path id="Vector_65" d="M208.979 383.196C209.598 367.251 196.455 353.744 179.623 353.03C162.79 352.315 148.643 364.662 148.024 380.607C147.404 396.553 159.105 400.176 175.937 400.891C192.77 401.606 208.36 399.142 208.979 383.196Z" fill="#CCCCCC"/>
<path id="Vector_66" d="M232.161 454.088C234.852 451.608 231.068 442.139 223.709 432.938C216.35 423.737 208.203 418.288 205.512 420.768C202.821 423.247 206.605 432.717 213.964 441.918C221.323 451.119 229.47 456.568 232.161 454.088Z" fill="#2F2E41"/>
<path id="Vector_67" d="M138.759 441.918C146.118 432.717 149.902 423.247 147.211 420.768C144.52 418.288 136.373 423.737 129.014 432.938C121.655 442.139 117.871 451.608 120.562 454.088C123.253 456.568 131.4 451.119 138.759 441.918Z" fill="#2F2E41"/>
<path id="Vector_68" d="M187.845 448.21C188.07 449.501 188.05 450.827 187.787 452.11C187.524 453.394 187.024 454.61 186.313 455.69C185.603 456.77 184.697 457.692 183.648 458.404C182.598 459.116 181.425 459.603 180.196 459.838C178.968 460.074 177.707 460.052 176.486 459.775C175.265 459.497 174.108 458.97 173.081 458.222C172.054 457.475 171.178 456.522 170.501 455.418C169.825 454.314 169.363 453.081 169.14 451.789L169.137 451.77C168.201 446.34 172.196 444.418 177.362 443.435C182.528 442.452 186.91 442.78 187.845 448.21Z" fill="#EED0D0"/>
<path id="Vector_69" d="M608.882 342H554.582C554.582 342.688 554.326 343.347 553.872 343.833C553.418 344.319 552.801 344.592 552.158 344.593H498.857C498.104 345.199 497.418 345.895 496.812 346.667C494.99 348.991 493.994 351.929 494 354.963V357.037C494.001 360.475 495.278 363.771 497.551 366.202C499.823 368.633 502.905 369.999 506.118 370H608.882C612.095 369.997 615.176 368.63 617.448 366.2C619.72 363.77 620.997 360.474 621 357.037V354.963C620.996 351.526 619.717 348.232 617.446 345.802C615.174 343.372 612.094 342.005 608.882 342Z" fill="#3F3D56"/>
<path id="Vector_70" d="M564 370H551V466H564V370Z" fill="#3F3D56"/>
<path id="Vector_71" d="M600 465.156C600 466.629 580.748 465.726 557 465.726C533.252 465.726 514 466.629 514 465.156C514 463.683 533.252 452 557 452C580.748 452 600 463.683 600 465.156Z" fill="#3F3D56"/>
<path id="Vector_72" d="M606.924 345.058L604.796 330.787C604.526 328.988 603.601 327.378 602.225 326.309C600.849 325.24 599.133 324.8 597.454 325.085L575.498 328.841L537.891 335.276L525.658 337.368H552.193C552.841 337.368 553.461 337.644 553.919 338.135C554.377 338.625 554.634 339.29 554.634 339.984V342.045C554.634 342.739 554.377 343.404 553.919 343.894C553.461 344.385 552.841 344.66 552.193 344.661H484.664C483.721 345.133 482.905 345.853 482.291 346.753C481.772 347.485 481.397 348.323 481.189 349.215C480.981 350.107 480.944 351.035 481.081 351.943L481.686 356.002L482.418 360.93L483.209 366.224C483.478 368.019 484.4 369.625 485.772 370.692C487.145 371.759 488.856 372.199 490.531 371.916L507.978 368.934L558.295 360.323L601.603 352.916C603.278 352.623 604.777 351.633 605.774 350.162C606.77 348.69 607.184 346.855 606.924 345.058Z" fill="#FFCA63"/>
<path id="Vector_73" d="M506.677 347.096C506.042 346.181 505.201 345.459 504.235 345H485.775C484.804 345.456 483.959 346.178 483.323 347.096C482.464 348.29 481.998 349.762 482 351.277V431.136C482.002 432.956 482.67 434.7 483.855 435.987C485.04 437.273 486.648 437.997 488.324 438H501.676C503.353 437.997 504.96 437.273 506.145 435.987C507.331 434.7 507.998 432.956 508 431.136V351.277C508.001 349.762 507.535 348.29 506.677 347.096Z" fill="#FFCA63"/>
<g id="right-arm">
<path id="Vector_74" d="M547.038 211.17L546.912 210.992L538.556 199.943C538.111 199.351 537.574 198.845 536.969 198.449C536.648 198.215 536.301 198.026 535.937 197.884C535.403 197.655 534.843 197.507 534.271 197.445C533.89 197.402 533.505 197.395 533.122 197.424C533.115 197.425 533.108 197.429 533.103 197.435C531.812 197.537 530.581 198.062 529.577 198.94L512.429 213.866L490.391 233.058L457.505 261.698L455.11 263.789H496.721L499.126 261.698L507.083 254.768L507.647 254.287L546.074 220.828L546.103 220.807C546.894 220.124 547.519 219.245 547.924 218.246C548.191 217.592 548.362 216.897 548.431 216.187C548.519 215.293 548.442 214.39 548.203 213.529C547.963 212.667 547.568 211.866 547.038 211.17Z" fill="#FFCA63"/>
<path id="Vector_75" d="M546.912 210.992C546.374 208.175 545.182 205.55 543.445 203.362C541.713 201.156 539.484 199.464 536.969 198.449C536.579 198.292 536.2 198.146 535.81 198.031C534.931 197.75 534.032 197.547 533.122 197.424C533.115 197.425 533.108 197.429 533.103 197.435C529.006 196.927 524.885 198.149 521.612 200.842L491.949 225.176C491.319 225.781 490.809 226.515 490.45 227.336C490.09 228.157 489.888 229.047 489.856 229.953C489.809 231.018 489.993 232.081 490.391 233.058C490.489 233.277 490.596 233.497 490.713 233.706C490.94 234.13 491.215 234.523 491.53 234.876L496.283 240.605L507.335 253.911L507.647 254.287L508.358 255.155C508.924 255.821 509.607 256.36 510.367 256.742C511.127 257.124 511.95 257.341 512.789 257.381C513.627 257.421 514.465 257.282 515.254 256.974C516.043 256.665 516.767 256.193 517.385 255.583L542.967 226.086C544.296 224.554 545.35 222.771 546.074 220.828C547.242 217.708 547.534 214.288 546.912 210.992Z" fill="#2F2E41"/>
</g>
<path id="Vector_76" d="M558 173C585.062 173 607 149.495 607 120.5C607 91.5051 585.062 68 558 68C530.938 68 509 91.5051 509 120.5C509 149.495 530.938 173 558 173Z" fill="#FFCA63"/>
<path id="Vector_77" d="M576.923 338.063L575.585 329.063L574.793 323.778C574.524 321.982 573.6 320.373 572.224 319.306C570.849 318.239 569.134 317.8 567.457 318.085L531.872 324.165L522.221 325.819L520.267 326.154V337.592H552.268C552.915 337.592 553.536 337.868 553.994 338.359C554.452 338.849 554.709 339.514 554.71 340.208V342.27C554.709 342.964 554.452 343.629 553.994 344.119C553.536 344.61 552.915 344.886 552.268 344.886H451C451 344.907 451.009 344.928 451.009 344.949L451.615 349.009L453.139 359.223C453.408 361.018 454.331 362.625 455.704 363.692C457.077 364.759 458.79 365.199 460.465 364.916L477.921 361.934L481.721 361.285L482.454 361.159L508.027 356.785L525.424 353.802L553.029 349.083L553.44 349.009L571.599 345.912C573.275 345.624 574.776 344.636 575.774 343.165C576.772 341.694 577.185 339.86 576.923 338.063Z" fill="#FFCA63"/>
<path id="Vector_78" d="M625 299.71C625 342.493 620.932 368.083 558.208 360.753C558.12 360.743 558.041 360.733 557.953 360.722C546.766 359.541 535.702 357.281 524.896 353.969C519.28 352.217 513.822 349.932 508.587 347.142C507.353 346.472 506.167 345.77 505 345.048H551.828C552.478 345.047 553.101 344.771 553.56 344.281C554.02 343.79 554.278 343.124 554.278 342.43V340.367C554.278 339.673 554.02 339.007 553.56 338.517C553.101 338.026 552.478 337.75 551.828 337.75H519.721V271.618C519.718 269.583 518.961 267.633 517.614 266.194C516.267 264.755 514.442 263.946 512.537 263.943H513.86C514.086 263.252 514.311 262.55 514.556 261.849C516.937 254.781 516.703 249.221 520.084 242.3C524.73 232.751 524.759 223.15 530.865 215.077C535.413 209.077 521.485 202.533 526.601 198.031C536.431 189.361 547.133 184 557.993 184C598.038 184 625 256.927 625 299.71Z" fill="#2F2E41"/>
<path id="Vector_79" d="M558.952 140L559 138.062C555.778 137.961 552.938 137.735 550.803 135.99C550.198 135.467 549.701 134.804 549.345 134.047C548.989 133.289 548.783 132.455 548.741 131.6C548.704 131.078 548.774 130.554 548.948 130.067C549.121 129.581 549.392 129.145 549.74 128.795C551.156 127.456 553.436 127.889 555.098 128.742L556.531 129.477L553.783 107L552.067 107.263L554.405 126.383C553.448 125.986 552.417 125.863 551.407 126.026C550.397 126.188 549.44 126.631 548.622 127.315C548.072 127.852 547.64 128.525 547.36 129.28C547.081 130.036 546.961 130.853 547.011 131.669C547.061 132.817 547.336 133.938 547.814 134.955C548.293 135.972 548.965 136.859 549.782 137.555C552.524 139.798 556.088 139.91 558.952 140Z" fill="#2F2E41"/>
<path id="Vector_80" d="M543 109H533V111H543V109Z" fill="#2F2E41"/>
<path id="Vector_81" d="M574 109H564V111H574V109Z" fill="#2F2E41"/>
<g id="left-arm">
<path id="Vector_82" d="M587.237 226.148L583.371 223.264L576.174 217.901C574.783 216.869 573.066 216.47 571.402 216.793C569.737 217.117 568.259 218.135 567.293 219.626L543.834 255.866L521.992 289.607L520.044 292.617V337.47H520.219C521.737 337.309 523.151 336.567 524.202 335.38C524.427 335.131 524.633 334.861 524.816 334.575L531.613 324.059L548.411 298.105L565.823 271.221L567.479 268.66L588.824 235.681C588.941 235.507 589.048 235.325 589.146 235.138C589.243 234.959 589.331 234.774 589.408 234.584C590.021 233.127 590.139 231.486 589.742 229.945C589.346 228.405 588.46 227.061 587.237 226.148Z" fill="#FFCA63"/>
<path id="Vector_83" d="M587.305 211.807C586.617 211.322 585.894 210.895 585.143 210.532C581.816 208.895 578.066 208.538 574.523 209.52C570.979 210.503 567.859 212.765 565.686 215.926L543.523 248.183C543.077 248.951 542.779 249.806 542.645 250.699C542.51 251.592 542.543 252.505 542.741 253.384C542.938 254.264 543.297 255.092 543.795 255.822C544.294 256.551 544.923 257.166 545.645 257.632L565.823 271.221L566.076 271.388L567.089 272.067C568.537 273.007 570.274 273.293 571.918 272.862C573.562 272.431 574.981 271.318 575.863 269.768L591.512 236.423L591.775 235.869L591.785 235.859L592.749 233.779C594.507 230.037 594.924 225.732 593.92 221.682C592.917 217.632 590.563 214.118 587.305 211.807Z" fill="#2F2E41"/>
</g>
<path id="Vector_84" d="M452 345V423.197C452.002 425.001 452.669 426.729 453.855 428.005C455.04 429.28 456.647 429.997 458.324 430H471.676C473.352 429.997 474.96 429.28 476.145 428.005C477.33 426.729 477.998 425.001 478 423.197V345H452Z" fill="#FFCA63"/>
<path id="Vector_85" d="M551.634 335.553H521.79V271.735C521.787 269.154 520.832 266.68 519.135 264.855C517.438 263.029 515.137 262.003 512.737 262H402.062C399.66 262.001 397.357 263.026 395.658 264.852C393.959 266.677 393.003 269.153 393 271.735V337.265C393.003 339.847 393.959 342.323 395.658 344.149C397.357 345.974 399.66 346.999 402.062 347H551.634C551.789 347 551.935 346.99 552.08 346.979C552.216 346.969 552.352 346.937 552.488 346.917C553.478 346.701 554.368 346.124 555.008 345.284C555.648 344.443 555.999 343.391 556 342.304V340.249C556 339.004 555.54 337.809 554.721 336.929C553.902 336.048 552.792 335.553 551.634 335.553ZM551.634 344.913H402.062C400.175 344.912 398.366 344.107 397.03 342.673C395.695 341.239 394.944 339.294 394.94 337.265V271.735C394.944 269.706 395.695 267.761 397.03 266.327C398.366 264.893 400.175 264.088 402.062 264.087H512.737C514.623 264.09 516.43 264.897 517.763 266.33C519.096 267.764 519.846 269.708 519.849 271.735V337.64H551.634C552.277 337.64 552.894 337.915 553.349 338.405C553.804 338.894 554.059 339.557 554.059 340.249V342.304C554.059 342.996 553.804 343.66 553.349 344.149C552.894 344.638 552.277 344.913 551.634 344.913Z" fill="#0B0B0C"/>
<path id="Vector_86" d="M457.5 312C461.642 312 465 308.418 465 304C465 299.582 461.642 296 457.5 296C453.358 296 450 299.582 450 304C450 308.418 453.358 312 457.5 312Z" fill="#77D006"/>
<path id="Vector_87" d="M522 336H520V346H522V336Z" fill="#3F3D56"/>
<path id="Vector_88" d="M169 339H157V363H169V339Z" fill="#2F2E41"/>
<path id="Vector_89" d="M195 339H182V363H195V339Z" fill="#2F2E41"/>
<path id="Vector_90" d="M167.5 368C173.299 368 178 365.985 178 363.5C178 361.015 173.299 359 167.5 359C161.701 359 157 361.015 157 363.5C157 365.985 161.701 368 167.5 368Z" fill="#2F2E41"/>
<path id="Vector_91" d="M192.5 367C198.299 367 203 365.209 203 363C203 360.791 198.299 359 192.5 359C186.701 359 182 360.791 182 363C182 365.209 186.701 367 192.5 367Z" fill="#2F2E41"/>
<g id="minion">
<path id="Vector_92" d="M217.106 310.83C220.816 286.289 205.289 263.166 182.425 259.184C159.562 255.201 138.02 271.867 134.309 296.409C130.599 320.95 146.126 344.073 168.989 348.055C191.853 352.038 213.395 335.372 217.106 310.83Z" fill="#2F2E41"/>
<path id="Vector_93" d="M177.19 307.602C185.103 307.352 191.329 300.264 191.097 291.771C190.864 283.277 184.261 276.594 176.348 276.844C168.435 277.093 162.209 284.181 162.442 292.675C162.674 301.168 169.277 307.851 177.19 307.602Z" fill="#EED0D0"/>
<path id="Vector_94" d="M176.769 297.351C179.408 297.351 181.547 295.055 181.547 292.223C181.547 289.39 179.408 287.094 176.769 287.094C174.13 287.094 171.991 289.39 171.991 292.223C171.991 295.055 174.13 297.351 176.769 297.351Z" fill="#3F3D56"/>
<path id="Vector_95" d="M135.025 261.755C131.638 245.476 142.463 229.027 159.203 225.015C175.943 221.002 192.259 230.947 195.645 247.225C199.031 263.504 187.937 269.508 171.198 273.52C154.458 277.533 138.411 278.034 135.025 261.755Z" fill="#6C63FF"/>
<path id="Vector_96" d="M155.107 319.86C155.107 324.266 165.676 332.966 177.404 332.966C189.132 332.966 200.128 320.562 200.128 316.156C200.128 311.75 189.132 317.011 177.404 317.011C165.676 317.011 155.107 315.454 155.107 319.86Z" fill="#EED0D0"/>
<g id="leftPage">
<path id="Vector_97" d="M220.622 272.148C224.756 260.536 225.355 249.993 221.959 248.6C218.563 247.207 212.458 255.49 208.323 267.102C204.188 278.714 203.589 289.257 206.985 290.65C210.382 292.043 216.487 283.76 220.622 272.148Z" fill="#2F2E41"/>
<path id="Vector_98" d="M256.643 293.971L225.771 300.439C225.271 300.545 224.755 300.528 224.263 300.388C223.77 300.248 223.313 299.99 222.928 299.632C222.534 299.269 222.223 298.816 222.018 298.305C221.812 297.794 221.718 297.24 221.743 296.684C222.27 283.096 219.809 269.565 214.56 257.187C214.343 256.682 214.236 256.131 214.247 255.574C214.258 255.018 214.388 254.472 214.625 253.978C214.857 253.49 215.19 253.066 215.597 252.738C216.005 252.409 216.477 252.185 216.977 252.082L247.849 245.613C248.638 245.45 249.455 245.592 250.156 246.015C250.857 246.438 251.395 247.114 251.674 247.923C256.241 261.539 258.839 275.826 259.378 290.287C259.403 291.149 259.141 291.992 258.64 292.667C258.139 293.342 257.431 293.804 256.643 293.971Z" fill="#FF6584"/>
</g>
<g id="rightPage">
<path id="Vector_99" d="M147.416 292.377C148.974 288.851 141.755 281.674 131.291 276.347C120.826 271.02 111.081 269.56 109.523 273.086C107.965 276.612 115.184 283.789 125.648 289.116C136.112 294.443 145.858 295.903 147.416 292.377Z" fill="#2F2E41"/>
<path id="Vector_100" d="M121.282 324.283L90.411 330.752C89.911 330.858 89.395 330.841 88.9022 330.701C88.4094 330.561 87.9529 330.302 87.5674 329.945C87.174 329.582 86.8628 329.129 86.6574 328.618C86.4521 328.107 86.3581 327.552 86.3826 326.997C86.9092 313.409 84.4486 299.878 79.1997 287.5C78.9824 286.995 78.8754 286.444 78.8867 285.887C78.898 285.331 79.0274 284.785 79.265 284.291C79.4968 283.803 79.8292 283.379 80.2368 283.051C80.6443 282.722 81.1164 282.498 81.617 282.395L112.488 275.926C113.278 275.763 114.095 275.905 114.796 276.328C115.496 276.751 116.034 277.427 116.314 278.236C120.88 291.852 123.479 306.139 124.018 320.6C124.042 321.462 123.781 322.305 123.28 322.98C122.779 323.655 122.071 324.117 121.282 324.283Z" fill="#CCCCCC"/>
</g>
</g>
<path id="Vector_101" d="M572.232 84.3838C563.426 88.6143 553.435 88.9881 544.378 85.4258C537.736 82.6854 531.981 77.9208 527.816 71.715C523.651 65.5093 521.257 58.1315 520.927 50.4845L518.725 51.8447L528.011 58.8763C528.205 58.9963 528.421 59.0671 528.645 59.0833C528.868 59.0996 529.092 59.0609 529.299 58.9701C529.506 58.8794 529.692 58.739 529.841 58.5596C529.99 58.3802 530.1 58.1666 530.161 57.9349C530.813 55.1226 531.997 52.4853 533.639 50.1877C535.281 47.8901 537.346 45.9815 539.704 44.5811C544.874 41.4776 550.886 40.4015 556.711 41.5364C568.776 43.6428 579.638 52.2992 586.704 62.7959C590.562 68.5064 593.419 74.9261 595.137 81.7399C595.251 82.1299 595.5 82.4572 595.834 82.6528C596.167 82.8484 596.558 82.897 596.924 82.7884C597.29 82.6798 597.603 82.4224 597.796 82.0706C597.989 81.7187 598.048 81.2999 597.96 80.9023C594.593 67.656 587.197 56.0073 576.953 47.8188C566.468 39.4396 551.789 34.375 539.456 41.1391C533.586 44.3584 528.808 50.0897 527.338 57.0973L529.488 56.1559L520.202 49.1243C519.98 48.9875 519.727 48.9157 519.471 48.916C519.214 48.9164 518.962 48.9888 518.74 49.1263C518.517 49.2637 518.332 49.4613 518.202 49.6996C518.072 49.9378 518.003 50.2084 518 50.4845C518.46 61.0969 522.542 71.1534 529.466 78.7264C536.702 86.51 546.493 90.9177 556.724 90.9974C562.584 91.0667 568.385 89.7371 573.709 87.1043C575.42 86.261 573.934 83.5447 572.232 84.3838Z" fill="#2F2E41"/>
<path id="Vector_102" d="M162.271 476.458L131.491 482.931C130.993 483.038 130.478 483.02 129.987 482.88C129.495 482.74 129.04 482.482 128.656 482.123C128.264 481.761 127.953 481.307 127.749 480.796C127.544 480.284 127.45 479.73 127.475 479.173C128 465.575 125.546 452.035 120.313 439.648C120.096 439.143 119.99 438.591 120.001 438.034C120.012 437.478 120.141 436.931 120.378 436.436C120.609 435.949 120.941 435.524 121.347 435.196C121.753 434.867 122.224 434.642 122.723 434.539L153.503 428.066C154.29 427.902 155.105 428.045 155.803 428.468C156.502 428.891 157.038 429.568 157.317 430.377C161.87 444.004 164.461 458.301 164.999 472.772C165.023 473.634 164.762 474.479 164.262 475.154C163.763 475.829 163.057 476.291 162.271 476.458Z" fill="#6C63FF"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="677" y1="374" x2="677" y2="466" gradientUnits="userSpaceOnUse">
<stop stop-color="#2C8A0B"/>
<stop offset="1" stop-color="#4CE715"/>
</linearGradient>
</defs>
</svg>





            </Image>
            <Splash>
            <motion.img variants={photoAnim}  src={splash} className="splash" alt="bg color"></motion.img>
            </Splash>
                  <Wave />
        </About>
        <Description>
          <Arekta><h1>About <span>Me</span></h1></Arekta>
          <p className="shortDescrip">
            I am Nafis Hasnain. I am a web developer studying in the Faculty
            Mathematics at the University of Waterloo, currently looking for
            Winter 2021 Internships. I am currently working on the web team of <a target="_blank" href="https://teamwaterloop.ca/">Waterloop</a>,
            building UI components.
          </p>
          <p className="shortDescrip2">
            On the side, I am always building mini side-projects. Nothing excites me more than the sense of accomplishment I can achieve
            after finishing up my projects built on ideas based off of my interests. I am a big fan of ambient music.
            Check out my custom built music library <a target="_blank" href="https://porjotooon.github.io/music-library/">here</a>, 
            a basic music web app I built for my study sessions.
          </p>
          <p className="shortDescrip2">
            Alway eager to discuss about tech, career opportunities and new ideas.
            Feel free to reach out to me through LinkedIn or email me at: nafishasnain0@gmail.com
          </p>
          <footer>

          <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/porjotooon'
              target='_blank'
            >
              <img src={git} className="icon"/>
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/nafis-hasnain-a2341918b/'
              target='_blank'
            >
              <img src={link}  className="icon"/>
            </a>
          </div>
        </div>
      </section>

          </footer>
        </Description>
        </>
    )
}


const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Splash = styled.div`
    position: absolute;
    top:0%;
    right: 5%;
    height:80vh;
    z-index: -1; 
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Arekta = styled.div`
    font-size: 2rem;
    padding-top: 2rem;
    padding-left: 10rem;
`
export default AboutSection