import Image from 'next/image'

export default function MyComponent() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-center items-center h-20 bg-white">
        <div className="relative w-full max-w-screen-lg px-4">
          <Image
            src="/nframe.png" // Correct path with leading slash
            alt="Description of the image"
            layout="responsive"
            width={1200} // Natural width of the image
            height={300} // Natural height of the image
          />
        </div>
      </div>
    </header>
  )
}
