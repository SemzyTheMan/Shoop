import Image from "next/image";
import logo from "../../public/assets/logo.png"
export const Logo = () => <div className={'h-6 w-32 relative'}>
  <Image src={logo} alt={'Logo'} fill={true} style={{objectFit: 'contain'}} />
</div>