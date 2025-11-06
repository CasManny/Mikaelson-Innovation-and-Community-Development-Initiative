"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

interface Props {
    onWireTransfer: () => void;
    open: boolean;
    onClose: () => void;
}

export default function CompanyPaymentOptionsDialog({ onWireTransfer,open, onClose }: Props) {
  const openPaystack = () => {
    window.open("https://paystack.com/pay/mikaelson-initiative", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Choose Payment Method
          </DialogTitle>
          <DialogDescription className="sr-only">
            Select a payment option for contributing.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap justify-center gap-4 py-4">
          <button
            onClick={openPaystack}
            className="rounded-2xl bg-teal-500 px-6 py-3 text-white font-semibold hover:bg-teal-600 transition"
          >
            Mobile Payment (Paystack)
          </button>

          <button
            onClick={onWireTransfer}
            className="rounded-2xl bg-gray-600 px-6 py-3 text-white font-semibold hover:bg-gray-700 transition"
          >
            Wire Transfer
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
