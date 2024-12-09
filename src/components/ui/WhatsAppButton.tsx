import Image from 'next/image';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/624321060"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-150"
    >
      <div className="relative w-8 h-8">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
  