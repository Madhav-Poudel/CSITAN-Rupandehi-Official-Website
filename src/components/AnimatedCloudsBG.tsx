import cloudDivider from '@/assets/cloud-divider.svg';

export default function AnimatedCloudsBG() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Cloud 1 */}
      <img
        src={cloudDivider}
        alt="cloud"
        className="absolute top-10 left-[-10vw] w-[40vw] opacity-60 animate-cloud-move"
        style={{ animationDelay: '0s' }}
      />
      {/* Cloud 2 */}
      <img
        src={cloudDivider}
        alt="cloud"
        className="absolute top-32 left-[20vw] w-[30vw] opacity-40 animate-cloud-move"
        style={{ animationDelay: '2s' }}
      />
      {/* Cloud 3 */}
      <img
        src={cloudDivider}
        alt="cloud"
        className="absolute top-1/2 left-[-20vw] w-[50vw] opacity-30 animate-cloud-move"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}
