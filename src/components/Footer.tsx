import { FC } from 'react';
import Link from 'next/link';
import { GithubIcon, TwitterIcon } from 'lucide-react';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-black w-screen" >
                <div className="py-4 flex justify-center">
                    <div className="grid grid-cols-3">
                        <Link href={"https://github.com/nguyenchun83/solana-token-creator"} target='_blank' className='flex mx-4'>
                            <GithubIcon />
                            <div className='ml-2'>pencetlah</div>
                        </Link>
                        <Link href={"https://x.com/sujani1980"} target='_blank' className='flex mx-4'>
                            <TwitterIcon />
                            <div className='ml-2'>jangan dipencet</div>
                        </Link>
                        <Link href={"https://x.com/sujani1980"} target='_blank' className='flex mx-4'>
                            <TwitterIcon />
                            <div className='ml-2'>pencet</div>
                        </Link>

                    </div>
                </div>
            </footer>
        </div>
    );
};