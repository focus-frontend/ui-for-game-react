import {useCallback, useEffect, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import ButtonConfig from '@/components/ui/btn/button-config'
import FireRadar from '@/components/ui/fire-radar'
import Camera from '@/components/ui/camera'
import TripleToggle from '@/components/ui/triple-toggle'
import VariantsControl from '@/components/ui/controls/variants-control'
import {
  TestVariantsSecond,
  TestVariantsThird,
} from '@/components/screens/ui-screen/ui-screen-first'
import ButtonReverse from '@/components/ui/btn/button-reverse'
import VariantsControlDefault from '@/components/ui/controls/variants-control-default'
import AxisControl from '@/components/ui/controls/axis-control'
import InfoItem from '@/components/ui/info-item'
import HorizontalRange from '@/components/ui/horizontal-range'
import VerticalRange from '@/components/ui/vertical-range'
import MainBar from '@/components/main-bar'
import MainRightBar from '@/components/ui/main-right-bar'
import Login from '@/components/login'

import imgLeft from '@/assets/images/compas.svg'

import cls from './index.module.css'
import {BsReverseLayoutSidebarInsetReverse} from "react-icons/bs";
import {BiCamera} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import ArrowSimple from "@/components/ui/arrows/arrow-simple";

export const SimpleFireIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M10.337 8.69705C9.31983 7.67971 8.32501 6.68378 7.29695 5.65552C5.35784 7.59046 3.41054 9.53359 1.4687 11.4708C2.49266 12.4954 3.50433 13.5068 4.46956 14.4723C6.41959 12.5528 8.37737 10.6261 10.3374 8.69659L10.337 8.69705Z'
        fill='white'
      />
      <path
        d='M10.8599 8.09406C11.1176 7.7894 11.3994 7.46471 11.6721 7.13273C13.3207 5.12539 14.7308 2.9623 15.9032 0.643926C15.9209 0.608405 15.9382 0.57243 15.9555 0.53691C16.0302 0.382078 16.012 0.238631 15.8959 0.112034C15.7857 -0.00773309 15.6236 -0.0359671 15.4588 0.0491903C14.9858 0.294188 14.5113 0.537821 14.0456 0.796936C11.8706 2.00781 9.85321 3.44182 7.98012 5.08076C7.95053 5.10672 7.92321 5.1345 7.91228 5.14543C8.89299 6.12678 9.86914 7.10359 10.8594 8.09451L10.8599 8.09406Z'
        fill='white'
      />
      <path
        d='M0.915174 12.0354C0.658387 12.2908 0.380202 12.5586 0.112943 12.8364C-0.0495977 13.0049 -0.0345736 13.1961 0.143903 13.3783C0.385665 13.626 0.632891 13.8688 0.877386 14.1133C1.44696 14.683 2.01654 15.2536 2.58702 15.8228C2.82469 16.0601 3.00043 16.0587 3.24037 15.8205C3.48988 15.5728 3.73892 15.3246 3.97249 15.0928C2.95262 14.0723 1.93959 13.0595 0.91563 12.0349L0.915174 12.0354Z'
        fill='white'
      />
    </svg>
  )
}

export const AmmoIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='none'
    >
      <path
        d='M12.5639 9.73984C12.5665 8.45735 12.5657 7.17506 12.5657 5.89257C12.5657 5.61575 12.5605 5.33872 12.5692 5.0621C12.572 4.9763 12.5986 4.8841 12.639 4.80772C12.7387 4.6193 12.8555 4.43989 12.959 4.25327C12.9869 4.20336 13.007 4.14082 13.0058 4.08449C12.9921 3.46289 13.0144 2.84309 13.0887 2.2257C13.1757 1.50327 13.3208 0.794275 13.5837 0.11314C13.5955 0.0828715 13.6252 0.0596191 13.6465 0.032959C13.6654 0.0540064 13.694 0.0720471 13.7013 0.0963018C13.8245 0.521059 13.9589 0.943412 14.0617 1.37318C14.1329 1.67225 14.1658 1.98095 14.2055 2.28664C14.2802 2.86053 14.2936 3.43764 14.282 4.01554C14.2798 4.12218 14.297 4.21499 14.3576 4.3072C14.4545 4.45473 14.5356 4.61248 14.6273 4.76362C14.6967 4.87788 14.7302 4.99635 14.729 5.13286C14.7256 5.50389 14.7256 5.87533 14.7262 6.24877H14.729V9.43395H14.7262C14.7262 9.5418 14.7266 9.64964 14.728 9.75768C14.729 9.83025 14.7066 9.85791 14.6313 9.85771C13.9796 9.8555 13.3276 9.8553 12.6757 9.85691C12.5898 9.85711 12.5639 9.82644 12.5639 9.73984Z'
        fill='white'
      />
      <path
        d='M16.9064 16.7682C16.5812 17.3349 16.2575 17.9022 15.9327 18.469C15.4649 19.2849 14.9968 20.1005 14.5288 20.9162C14.1869 21.5123 13.845 22.1083 13.5031 22.7042C13.4288 22.8335 13.42 22.8369 13.2842 22.7796C12.5518 22.4699 11.8452 22.1085 11.1574 21.7104C11.1347 21.6971 11.114 21.6807 11.0827 21.659C12.4203 19.6074 13.7521 17.5648 15.0895 15.5132C15.1886 15.5771 15.2811 15.6405 15.377 15.698C15.8436 15.9774 16.3109 16.2555 16.7782 16.5339C16.8067 16.5511 16.8366 16.5664 16.8647 16.5842C16.9636 16.6471 16.9654 16.6658 16.9064 16.7682Z'
        fill='white'
      />
      <path
        d='M0.366403 2.93578C0.271892 2.93618 0.22855 2.92295 0.219119 2.8115C0.183001 2.38594 0.140662 1.96078 0.099928 1.53562C0.082872 1.40493 0.0674213 1.26982 0.0539772 1.13051C0.0407337 0.991197 0.0294968 0.847673 0.0206678 0.700341C0.00742437 0.477839 0.00100329 0.264158 0 0.0598971C0.0605989 0.0428586 0.149491 0.0216107 0.258649 0.00938316C0.41115 -0.00765525 0.522515 0.00236735 0.624249 0.00938316C0.757486 0.0188044 0.947912 0.0284261 1.1891 0.028827C1.86613 0.0286265 2.54315 0.0286265 3.22017 0.0286265C4.03745 0.0286265 4.85474 0.0286265 5.67202 0.028827C6.07213 0.0280252 6.47245 0.0272234 6.87256 0.0264216C6.89503 0.0250184 6.91771 0.0252189 6.94058 0.0262211C7.02305 0.0260207 7.10552 0.0258202 7.18799 0.0258202C7.17957 0.276786 7.17716 0.539578 7.18198 0.812394C7.18278 0.821414 7.18338 0.830835 7.18338 0.840657C7.18559 1.02708 7.19662 1.2133 7.20365 1.39972C7.21167 1.54064 7.2215 1.67855 7.23294 1.81365C7.24699 1.95838 7.26144 2.1035 7.27588 2.25024C7.29776 2.47434 7.32003 2.70065 7.3425 2.92856C7.30377 2.93077 7.27468 2.93398 7.24538 2.93398C5.6979 2.93418 4.15022 2.93418 2.60254 2.93418C1.8571 2.93418 1.11165 2.93277 0.366403 2.93578Z'
        fill='white'
      />
      <path
        d='M4.99603 5.4221C5.02091 5.48584 5.05502 5.54758 5.06927 5.61373C5.30625 6.70539 5.65258 7.76258 6.0858 8.7911C6.46686 9.69634 6.91753 10.5665 7.43303 11.4034C7.81307 12.0208 8.22583 12.6155 8.67049 13.1876C9.14184 13.794 9.64027 14.3783 10.1883 14.9169C10.6309 15.3521 11.08 15.7821 11.5471 16.1906C11.9462 16.5396 12.3746 16.8551 12.7906 17.1846C12.8897 17.2632 12.9915 17.3388 13.1 17.4218C12.68 18.0662 12.2619 18.7077 11.8373 19.3589C11.6057 19.1777 11.3808 19.0061 11.1607 18.8283C10.6434 18.4108 10.1407 17.9766 9.67278 17.5033C9.42797 17.2558 9.17474 17.016 8.93576 16.7631C8.65765 16.4684 8.38656 16.1669 8.11527 15.866C7.82531 15.5592 7.52092 15.2054 7.21772 14.8012C7.10836 14.6551 7.00522 14.5112 6.9085 14.3697C6.81159 14.2284 6.72109 14.0894 6.63621 13.9541C4.50321 10.8153 3.16341 7.36809 2.6732 3.56371C2.71634 3.56371 2.75949 3.56371 2.80243 3.56351C2.83273 3.56351 2.86222 3.56331 2.89112 3.56331C3.0681 3.56291 3.24488 3.56251 3.42186 3.56231C3.45698 3.56211 3.49229 3.56211 3.52761 3.56191H3.59403C3.75756 3.56191 3.9211 3.56231 4.08484 3.56231C4.27145 3.56231 4.45826 3.56471 4.64467 3.5595C4.72153 3.5573 4.75323 3.57514 4.76487 3.65933C4.84313 4.22019 4.92881 4.77985 5.01007 5.34012C5.01389 5.36617 5.00104 5.39464 4.99603 5.4221Z'
        fill='white'
      />
      <path
        d='M7.33818 3.55933C7.41624 3.55893 7.44935 3.58058 7.46219 3.66016C7.60867 4.55979 7.82498 5.44278 8.10711 6.30953C8.13279 6.38851 8.15847 6.46729 8.18255 6.54667C8.19841 6.59377 8.21426 6.64068 8.23091 6.68819C8.24757 6.72747 8.26884 6.76756 8.27285 6.80605C8.2883 6.84875 8.30375 6.89104 8.3192 6.93314C8.37097 7.06484 8.42274 7.19693 8.47471 7.32903C8.83911 8.25652 9.28397 9.14332 9.80187 9.99524C10.2724 10.769 10.7971 11.5036 11.3907 12.186C11.7954 12.6512 12.227 13.0944 12.6615 13.5328C13.0614 13.9365 13.4902 14.3076 13.9354 14.6596C14.1596 14.8255 14.3835 14.9915 14.6076 15.1575C14.3213 15.5802 14.035 16.0028 13.7488 16.4253C13.6477 16.5807 13.5486 16.7332 13.4454 16.8918C13.364 16.8343 13.2855 16.7807 13.2093 16.7242C12.3546 16.0908 11.5478 15.4016 10.7949 14.6501C10.1751 14.0313 9.5972 13.3751 9.06445 12.6801C8.55217 12.0118 8.07661 11.317 7.66887 10.5806C7.36688 10.0355 7.09258 9.47467 6.82289 8.9126C6.73219 8.72418 6.64149 8.53314 6.56785 8.3359C6.4894 8.12683 6.40512 7.91976 6.32827 7.71009C6.25282 7.50362 6.17998 7.29596 6.11236 7.08668C6.04393 6.87421 5.98153 6.65972 5.91973 6.44524C5.69378 5.66247 5.53225 4.86628 5.42891 4.05846C5.40865 3.8999 5.39801 3.74014 5.38176 3.56775C5.42249 3.56535 5.45741 3.56154 5.49212 3.56154C6.10734 3.56093 6.72276 3.56234 7.33798 3.55933H7.33818Z'
        fill='white'
      />
      <path
        d='M18.3617 5.15826C18.3575 6.6815 18.3583 8.20473 18.3617 9.72777C18.3617 9.82699 18.3394 9.86006 18.2355 9.85886C17.7814 9.85405 17.3273 9.85666 16.8734 9.85565V9.85766H16.4472C16.3912 9.86127 16.3324 9.86628 16.2867 9.85766H16.2024V9.78069C16.1883 9.71694 16.2042 9.62233 16.2008 9.54856C16.1994 9.5193 16.2002 9.48983 16.2024 9.46036V9.18735C16.2002 7.80423 16.1994 6.42091 16.2034 5.03779C16.2034 4.95921 16.2381 4.87442 16.2766 4.80366C16.3774 4.61925 16.4919 4.44265 16.5945 4.25944C16.6224 4.20972 16.6392 4.14738 16.6406 4.09046C16.6507 3.68995 16.6384 3.28825 16.6651 2.88895C16.7279 1.94883 16.8748 1.02294 17.2105 0.135739C17.2151 0.123311 17.2173 0.108879 17.2251 0.0986558C17.242 0.0762052 17.2615 0.0559596 17.2799 0.0349121C17.2994 0.0553582 17.3275 0.0721962 17.3365 0.0964509C17.3905 0.239974 17.4461 0.383298 17.4902 0.530028C17.6566 1.08348 17.7667 1.64855 17.8378 2.22224C17.9096 2.80335 17.9349 3.38667 17.9132 3.97059C17.9064 4.155 17.9878 4.2889 18.0663 4.43323C18.1203 4.53265 18.1793 4.62987 18.2425 4.72388C18.3314 4.85638 18.3623 4.9979 18.3619 5.15826H18.3617Z'
        fill='white'
      />
      <path
        d='M11.4978 19.8802C11.1846 20.3609 10.8723 20.8396 10.5539 21.3283C10.5124 21.3034 10.4746 21.284 10.4405 21.2599C10.094 21.0164 9.74766 20.7728 9.40212 20.5279C8.73072 20.0516 8.1155 19.5082 7.52456 18.9377C6.84633 18.2832 6.22148 17.5802 5.64238 16.8361C4.98964 15.9972 4.39609 15.1183 3.87518 14.1924C3.57219 13.654 3.29688 13.1001 3.01395 12.5505C3.01355 12.5497 3.01315 12.5491 3.01255 12.5483C2.97864 12.4901 2.94473 12.4276 2.91182 12.3602C2.85202 12.238 2.80567 12.1215 2.76935 12.0147C2.59518 11.6174 2.42121 11.2197 2.25426 10.8194C2.12744 10.5151 2.01628 10.2042 1.9011 9.89509C1.88806 9.86041 1.89528 9.81811 1.89307 9.77942C1.85374 9.70105 1.80298 9.62628 1.77729 9.54369C1.56419 8.86316 1.33805 8.18583 1.15064 7.49808C0.967836 6.82697 0.815536 6.14683 0.669657 5.4663C0.550266 4.90944 0.459568 4.34658 0.357031 3.78611C0.344591 3.71776 0.337768 3.6482 0.327133 3.56982H2.055C2.0845 3.79974 2.10838 4.02786 2.1443 4.25397C2.19848 4.59594 2.25025 4.93891 2.32228 5.27727C2.43445 5.80366 2.55103 6.32985 2.68668 6.85062C2.91021 7.70876 3.18692 8.55126 3.52001 9.37351C3.72208 9.87243 3.942 10.3641 4.15329 10.8593C4.17276 10.8987 4.22814 11.0124 4.2474 11.0517C4.28753 11.1343 4.35235 11.267 4.39248 11.3496C4.54859 11.653 4.70149 11.9581 4.86523 12.2576C5.05224 12.5998 5.25671 12.9325 5.45175 13.2703C5.4646 13.2925 5.46179 13.3238 5.466 13.3505C5.466 13.3505 5.466 13.3505 5.4656 13.3505C5.55309 13.4705 5.64318 13.5888 5.72766 13.7109C5.9839 14.0811 6.23513 14.455 6.49538 14.8222C6.5 14.8286 6.50361 14.835 6.50682 14.8412C6.54394 14.895 6.58106 14.9487 6.61818 15.0022C6.61859 15.0028 6.61899 15.0032 6.61939 15.0038C6.78292 15.2155 6.94144 15.4221 7.10197 15.6268C7.1413 15.6771 7.18083 15.7272 7.22076 15.7769C7.24564 15.8078 7.27093 15.8387 7.29621 15.8696C7.33012 15.9104 7.36423 15.9507 7.39935 15.9902C7.41038 16.0025 7.41821 16.0135 7.42363 16.0237C7.44831 16.0534 7.47299 16.0826 7.49767 16.1119C7.5687 16.1967 7.64054 16.2805 7.71258 16.3641C7.721 16.3737 7.72923 16.3831 7.73766 16.3927C8.26017 16.9951 8.81018 17.5666 9.38828 18.1114C10.0545 18.739 10.756 19.3249 11.4978 19.8804V19.8802Z'
        fill='white'
      />
      <path
        d='M21.993 9.43163C21.9936 9.53266 21.9946 9.63369 21.9958 9.73471C21.997 9.83313 21.9645 9.85899 21.87 9.85839C21.3083 9.85518 20.7465 9.85719 20.1846 9.85739C20.099 9.85739 20.0131 9.85498 19.9274 9.85739C19.8584 9.85919 19.8281 9.82973 19.8347 9.76117C19.8363 9.74453 19.8347 9.7277 19.8347 9.71106V5.57193C19.8347 5.41537 19.8377 5.25862 19.8339 5.10207C19.8311 4.98039 19.8674 4.87335 19.9294 4.77072C20.0368 4.59392 20.1437 4.41672 20.2438 4.23571C20.2695 4.18921 20.28 4.12767 20.2786 4.07335C20.2591 3.39121 20.296 2.71248 20.3875 2.03595C20.4738 1.39651 20.613 0.770301 20.836 0.164134C20.853 0.117629 20.8896 0.0783408 20.9168 0.0356445C20.9461 0.0805458 20.9857 0.121839 21.0033 0.17095C21.2425 0.838655 21.39 1.52681 21.4737 2.23119C21.5457 2.83616 21.566 3.44192 21.5553 4.0501C21.5539 4.12486 21.581 4.20705 21.6169 4.2742C21.7177 4.46243 21.8339 4.64223 21.935 4.83005C21.9683 4.89199 21.99 4.96857 21.9904 5.03832C21.995 5.85356 21.9948 6.6686 21.9934 7.48364C21.9934 7.48684 21.993 7.48985 21.9928 7.49306V7.76968C21.9954 7.78492 21.9978 7.79975 22 7.81458C21.9976 7.81418 21.9952 7.81358 21.9928 7.81298V8.45823C21.9944 8.47227 21.9954 8.4867 21.9952 8.50213C21.9942 8.60497 21.9934 8.7078 21.9928 8.81063V9.43163H21.993Z'
        fill='white'
      />
    </svg>
  )
}

export const tripleOptionsFirst = [
  {value: 'Виключити', label: 'Виключити'},
  {value: 'Звичайний', label: 'Звичайний'},
  {value: 'Балістичний', label: 'Балістичний'},
]

const tripleOptionsSecond = [
  {value: 'Одиночні', label: 'Одиночні'},
  {value: 'Черга', label: 'Черга'},
  {value: 'Автоматичний', label: 'Автоматичний'},
]

const MainScreen = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [activeTripleFirst, setActiveTripleFirst] = useState(
    tripleOptionsFirst[1]
  )
  const [activeTripleSecond, setActiveTripleSecond] = useState(
    tripleOptionsSecond[1]
  )
  const [activeFuse, setActiveFuse] = useState(TestVariantsSecond[0])
  const [activeAI, setActiveAI] = useState(TestVariantsThird[1])
  const [hRangeValue, setHRangeValue] = useState(5)
  const [vRangeValue, setVRangeValue] = useState(5)
  const [isRightBarVisible, setIsRightBarVisible] = useState(window.innerWidth > 1200)
  const toggleSideBar = () => setIsRightBarVisible(!isRightBarVisible)

  const [isCameraVisible, setCameraVisible] = useState(window.innerWidth > 1100)
  const toggleCamera = () => setCameraVisible(!isCameraVisible)

  const topRef = useRef<any>()

  useEffect(() => {
    topRef.current.scrollLeft = (topRef.current.scrollWidth - topRef.current.clientWidth) / 2
  }, [])

  useEffect(() => {
    const resizeListener = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  return (
    <div className={cls.wrap}>
      <div ref={topRef} className={cls.topLineWrap}>
        <div
          className={cls.topLine}
          style={{backgroundImage: `url("${imgLeft}")`}}
        />
      </div>

      <div className={cls.toggleBar} onClick={toggleSideBar}>
        <BsReverseLayoutSidebarInsetReverse style={{color: isRightBarVisible ? '#0daa8e' : "#fff"}}/>
      </div>

      <div className={cls.options}>
        <ButtonConfig submit={() => alert('submit')} state='simple'/>
      </div>

      <div className={cls.cameraToggle} onClick={toggleCamera}>
        <BiCamera/>
      </div>

      {
        isRightBarVisible && (
          <>
            <div className={cls.login}>
              <Login/>
            </div>

            <div className={cls.rightBar}>
              <MainRightBar/>
            </div>
          </>
        )
      }

      <div className={cls.fire}>
        <FireRadar withPoint={true}/>
      </div>

      {
        isCameraVisible && (
          <div className={cls.camera}>
            <div onClick={toggleCamera} className={cls.cameraOff}>
              <CgClose/>
            </div>
            <Camera name='Камера 1 (17 градусів, дальномірна)'/>
          </div>
        )
      }


      {
        screenWidth > 1200 ? (
          <div className={cls.bottom}>
            <div className={cls.firstDec}></div>
            <div className={cls.centerBlock}>
              <TripleToggle
                submit={(v: any) => setActiveTripleFirst(v)}
                value={activeTripleFirst}
                options={tripleOptionsFirst}
              />
            </div>
            <div className={cls.centerBlock}>
              <TripleToggle
                submit={(v: any) => setActiveTripleSecond(v)}
                value={activeTripleSecond}
                options={tripleOptionsSecond}
              />
            </div>
            <div>
              <VariantsControl
                title='Запобіжник'
                options={TestVariantsSecond}
                value={activeFuse}
                submit={(v: any) => setActiveFuse(v)}
              />

              <div className={cls.marginTop}>
                <ButtonReverse
                  withIcon={true}
                  text='Вогонь'
                  submit={() => alert(1)}
                  type='greenSimple'
                />
              </div>
            </div>
            <div>
              <InfoItem
                value='199999'
                icon={<SimpleFireIcon/>}
                title='Використано'
              />

              <div className={cls.marginTop}>
                <InfoItem value='199999' icon={<AmmoIcon/>} title='Залишилось'/>
              </div>
            </div>
            <div>
              <HorizontalRange
                value={hRangeValue}
                submit={(v: any) => setHRangeValue(v)}
              />
            </div>
            <div>
              <VerticalRange
                value={vRangeValue}
                submit={(v: any) => setVRangeValue(v)}
              />
            </div>
            <div className={cls.axis}>
              <AxisControl arrowTypes={['hover', 'simple', 'simple', 'simple']}/>
            </div>
            <div className={cls.rightItem}>
              <VariantsControlDefault
                height='52px'
                options={TestVariantsThird}
                value={activeAI}
                submit={(v: any) => setActiveAI(v)}
              />
            </div>
          </div>
        ) : (
          <div className={cls.bottomMobile}>
            <div className={cls.swiperButtons}>
              <span onClick={handlePrev} style={{transform: "rotate(180deg) translateY(3px)"}}>
                <ArrowSimple type="hover" />
              </span>
              <span onClick={handleNext}>
                <ArrowSimple type="hover" />
              </span>
            </div>
            <Swiper
              ref={sliderRef}
              spaceBetween={50}
              breakpoints={{
                // when window width is >= 640px
                400: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
                968: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className={cls.centerBlock}>
                  <TripleToggle
                    submit={(v: any) => setActiveTripleFirst(v)}
                    value={activeTripleFirst}
                    options={tripleOptionsFirst}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cls.centerBlock}>
                  <TripleToggle
                    submit={(v: any) => setActiveTripleSecond(v)}
                    value={activeTripleSecond}
                    options={tripleOptionsSecond}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <VariantsControl
                    title='Запобіжник'
                    options={TestVariantsSecond}
                    value={activeFuse}
                    submit={(v: any) => setActiveFuse(v)}
                  />

                  <div className={cls.marginTop}>
                    <ButtonReverse
                      withIcon={true}
                      text='Вогонь'
                      submit={() => alert(1)}
                      type='greenSimple'
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <InfoItem
                    value='199999'
                    icon={<SimpleFireIcon/>}
                    title='Використано'
                  />

                  <div className={cls.marginTop}>
                    <InfoItem value='199999' icon={<AmmoIcon/>} title='Залишилось'/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <VerticalRange
                    value={vRangeValue}
                    submit={(v: any) => setVRangeValue(v)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cls.axis}>
                  <AxisControl arrowTypes={['hover', 'simple', 'simple', 'simple']}/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={cls.rightItem}>
                  <VariantsControlDefault
                    height='52px'
                    options={TestVariantsThird}
                    value={activeAI}
                    submit={(v: any) => setActiveAI(v)}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }

      <MainBar/>
    </div>
  )
}

export default MainScreen
