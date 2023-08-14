'use client'
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

const  Facebook = () => {
    const router = useRouter()

    const handleBt = () => {
      router.push("/")
    }
    
    return (
        <>
            facebook page
            <div>
                <Button variant="danger">Hoi dan it</Button>
                <button onClick={() => handleBt()}>Back home</button>
            </div>
        </>
    )
}

export default Facebook;