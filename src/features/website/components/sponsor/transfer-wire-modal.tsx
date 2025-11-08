import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

interface Props {
  onClose: () => void;
  open: boolean;
}

export function WireTransferDialog({ onClose, open }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Wire Transfer Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Bank information for wire transfer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Bank Name:</strong> Example Bank
          </p>
          <p>
            <strong>Account Name:</strong> Mikaelson Initiative
          </p>
          <p>
            <strong>Account Number:</strong> 1234567890
          </p>
          <p>
            <strong>Routing Number:</strong> 123456789
          </p>
          <p>
            <strong>SWIFT Code:</strong> EXAMPLEXXX
          </p>
          <p className="pt-3 italic text-gray-500">
            Please email us at community@mikaelsoninitiative.org with your
            transfer confirmation.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
