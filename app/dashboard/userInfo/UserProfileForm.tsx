'use client'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const UserProfileForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Card className="w-[80vw]">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <Input id="name" {...register('name')} />
          </div>
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <div>
            <label htmlFor="phone" className="font-medium">
              Phone
            </label>
            <Input id="phone" {...register('phone')} />
          </div>
          <div>
            <label className="font-medium">Dietary Preferences</label>
            <div className="space-y-1">
              <div className="flex items-center">
                <Checkbox {...register('vegetarian')} />
                <label className="ml-2">Vegetarian</label>
              </div>
              <div className="flex items-center">
                <Checkbox {...register('lowSpice')} />
                <label className="ml-2">Low-Spice</label>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserProfileForm;