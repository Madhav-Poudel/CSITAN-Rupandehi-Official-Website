import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Star, MessageCircle } from 'lucide-react';

export default function JoinUsDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#1FADE4] rounded-full p-3 mb-1 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-[#CF4546] text-2xl font-bold">Join CSITAN Rupandehi</DialogTitle>
            <DialogDescription className="text-center text-base mt-1">
              Become a part of our vibrant IT community!<br />
              <span className="text-[#1FADE4] font-semibold">Connect. Learn. Grow.</span>
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="my-4 border-t border-gray-200" />
        <ul className="flex flex-col gap-2 mb-4 text-sm text-gray-700">
          <li className="flex items-center gap-2"><Star className="w-4 h-4 text-[#1FADE4]" /> Access exclusive events & workshops</li>
          <li className="flex items-center gap-2"><Users className="w-4 h-4 text-[#CF4546]" /> Network with IT professionals & students</li>
          <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-[#1FADE4]" /> Get mentorship & career support</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-[#1FADE4] hover:bg-[#CF4546] text-white font-semibold">Membership Form</Button>
          </a>
          <a href="https://www.facebook.com/csitan.rupandehi/" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full border-[#1FADE4] text-[#1FADE4] hover:bg-[#1FADE4] hover:text-white">Facebook Page</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
