
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs'

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.push('https://www.google.com/');
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className='success  '>
         <p className='text-green-500'>
          <BsBagCheckFill  size={40} />
        </p>
      <h2>Thank You for Your Order!</h2>
      <p>Your order has been successfully placed.</p>
      <p className='redirectMessage'>
        You will be redirected to the google in 5 seconds...
      </p>
    </div>
  );
};

export default SuccessPage;
