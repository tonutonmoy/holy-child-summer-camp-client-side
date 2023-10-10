
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAllClassesData from '../../Hooks/useAllClassesData';

// import './PaymentCheckOutForm.css'

const PaymentCheckOutForm = ({selectedClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');

    const {user}=useContext(AuthContext);

    const [,refetch]=useAllClassesData()

   
    const {price,bookingId,className,instructorName,classImage,_id,instructorEmail,instructorImage}=selectedClass;

  
console.log(selectedClass)
    


    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res?.data?.clientSecret);
                })
                .catch(error=> console.log(error))
        }
    }, [selectedClass, axiosSecure])





    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error)

            toast.error(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }



        // conform card

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );


        if (confirmError) {
            console.log(confirmError);
        }


        if (paymentIntent?.status === 'succeeded') {
            
            //  payment information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date().getTime(),
                quantity: 1,
                name: user?.name,
                className,
                instructorName,
                payment:'done',
                classImage,
                instructorEmail,
                instructorImage
                
              

               
            }
            axiosSecure.post(`/paymentHistory?userEmail=${user?.email}&updateId=${bookingId}&deleteId=${_id}`, payment)
                .then(res => {
                    console.log(res.data);

                    toast.error(res?.data?.message);

                    if(res.data.insertedId){

                        toast.success('payment successfully');

                        refetch()
                    }
                     
                  
                })

            console.log('done')


        }





    };





    return (

        <>

            <form style={{ boxShadow: "10px 10px 10px black", borderRadius: "30px", border: "1px solid white" }} className='mb-[50px]  p-10 w-[95%] h-[200px] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] mt-20 bg-gradient-to-b  from-gray-900 to-gray-600 bg-gradient-to-r ' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '14px ',
                                color: '#FFFFFF',
                                '::placeholder': {
                                    color: '#FFFFFF',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className=' text-center mt-[50px] '>
                    <button className=' btn  btn-outline text-white  w-[100px]  text-center' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>

            </form>

            <ToastContainer />

        </>
    );
};

export default PaymentCheckOutForm;