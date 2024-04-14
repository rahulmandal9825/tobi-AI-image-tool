import Header from '@/components/shared/Header'
import Transformationform from '@/components/shared/Transformationform';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const AddTransformationPage =  async ({params:{type}}:SearchParamProps) => {

  const {userId} = auth()


  if(!userId) redirect('sign-in')

    const user = await getUserById(userId);

  console.log(user);
  
  
  const transformation = transformationTypes[type];
  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle}/>
      <h3 className='mb-6 text-blue-600 font-semibold'>Credit Balance {user.creditBalance}</h3>
      <Transformationform
      action="Add" 
      userId={user._id} 
      type={transformation.type as TransformationTypeKey} 
      creditBalance={user.creditBalance}
      />
    </div>
  )
}

export default AddTransformationPage
