import { X } from "lucide-react";
import { useEffect } from "react";

interface HealthIssuesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const healthData = [
    { issue: "Type 2 Diabetes", blend: "Diabetic Multigrain", include: "Barley, Jowar, Bajra, Buckwheat, Fenugreek, Oats", avoid: "White rice flour, Refined wheat" },
    { issue: "High Cholesterol", blend: "Cardiac Atta", include: "Oats (beta-glucan), Barley, Flaxseed, Psyllium husk, Ragi", avoid: "Coconut flour (high saturated fat)" },
    { issue: "Obesity/Overweight", blend: "Weight Management Atta", include: "Barley, Jowar, Flaxseed, Chia, Ragi, Kohlrabi millet", avoid: "Maida, high-starch grains" },
    { issue: "Hypertension", blend: "Heart Health Atta", include: "Oats, Flaxseed, Amaranth, Quinoa, Low-sodium millet blend", avoid: "Salted/processed grain products" },
    { issue: "Anaemia (Iron Deficiency)", blend: "Iron-Rich Atta", include: "Ragi, Bajra, Amaranth, Masoor dal flour, Moringa", avoid: "High-phytate un-soaked legumes" },
    { issue: "Osteoporosis", blend: "Bone Health Atta", include: "Ragi (highest calcium), Amaranth, Sesame, Moringa", avoid: "Excess soya (phytoestrogen)" },
    { issue: "PCOS", blend: "Hormonal Balance Atta", include: "Jowar, Ragi, Flaxseed, Quinoa, Barley", avoid: "Refined wheat, Maida, White rice" },
    { issue: "Celiac Disease", blend: "Gluten-Free Atta", include: "Ragi, Jowar, Bajra, Buckwheat, Amaranth, Rice flour", avoid: "ALL wheat, barley, rye, oats" },
    { issue: "Constipation/IBS", blend: "Digestive Health Atta", include: "High-fibre oats, Psyllium husk, Barley, Jowar, Flaxseed", avoid: "Low-fibre polished grains" },
    { issue: "Hypothyroidism", blend: "Thyroid-Friendly Atta", include: "Millet (moderate), Quinoa, Buckwheat, Amaranth", avoid: "Excess soy flour, Raw millet" },
    { issue: "Pregnancy", blend: "Maternal Nutrition Atta", include: "Masoor flour, Bajra, Ragi, Amaranth, Moong dal flour", avoid: "Excess fenugreek (early pregnancy)" },
    { issue: "Children (Growth)", blend: "Kids Growth Atta", include: "Ragi, Wheat, Moong flour, Amaranth, Bajra", avoid: "Excess raw seeds (choking risk)" },
    { issue: "Kidney Disease (CKD)", blend: "Renal-Care Atta", include: "White rice flour, Low-potassium millet, Refined wheat (limited)", avoid: "High-potassium grains, High-phosphorus legume flours" },
    { issue: "Joint Pain/Arthritis", blend: "Anti-Inflammatory", include: "Flaxseed, Turmeric-enhanced, Jowar, Bajra, Ragi", avoid: "Nightshade-related flours" },
];

export default function HealthIssuesModal({ isOpen, onClose }: HealthIssuesModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Handle backdrop click to close
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-5xl max-h-[90vh] bg-ivory rounded-3xl shadow-premium flex flex-col overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex-none flex items-center justify-between p-6 border-b border-wheat/20 bg-white">
                    <div>
                        <h2 className="text-2xl font-bold text-dark-brown">Atta Combinations by Health Issue</h2>
                        <p className="text-sm text-muted mt-1">Discover the right grain blend tailored for specific dietary needs.</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-wheat/20 text-dark-brown transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-ivory scrollbar-thin scrollbar-thumb-wheat/30">
                    <div className="overflow-x-auto border border-wheat/20 rounded-2xl bg-white shadow-sm">
                        <table className="w-full min-w-[800px] text-left border-collapse">
                            <thead className="sticky top-0 z-20 bg-wheat/10 backdrop-blur-sm">
                                <tr>
                                    <th className="p-4 font-semibold text-dark-brown border-b border-wheat/20">Health Issue</th>
                                    <th className="p-4 font-semibold text-dark-brown border-b border-wheat/20">Recommended Blend</th>
                                    <th className="p-4 font-semibold text-accent-green border-b border-wheat/20">Key Grains to Include</th>
                                    <th className="p-4 font-semibold text-red-600/80 border-b border-wheat/20">Grains to Avoid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {healthData.map((row, idx) => (
                                    <tr 
                                        key={idx} 
                                        className="transition-colors border-b border-wheat/10 last:border-none hover:bg-wheat/5"
                                    >
                                        <td className="p-4 text-sm font-medium text-dark-brown">{row.issue}</td>
                                        <td className="p-4 text-sm text-dark-brown bg-wheat/5 font-semibold">{row.blend}</td>
                                        <td className="p-4 text-sm text-muted">{row.include}</td>
                                        <td className="p-4 text-sm text-muted/80">{row.avoid}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Footer Disclaimer */}
                <div className="flex-none p-4 bg-wheat/5 border-t border-wheat/20 text-center">
                    <p className="text-[10px] text-muted/80 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                        <span className="text-red-500/80">⚠️</span>
                        Guidance Only. Consult your physician before changing your diet.
                    </p>
                </div>
            </div>
        </div>
    );
}
