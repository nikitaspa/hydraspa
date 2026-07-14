"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Hourglass, Droplet, Plus, Check, Compass, ArrowRight } from 'lucide-react';

interface BespokeCustomizerProps {
  onBookCustom: (packageName: string, totalPrice: number) => void;
}

export default function BespokeCustomizer({ onBookCustom }: BespokeCustomizerProps) {
  const [duration, setDuration] = useState<60 | 90 | 120>(90);
  const [oilId, setOilId] = useState('lavender');
  const [addons, setAddons] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrices = {
    60: 2499,
    90: 3299,
    120: 4199
  };

  const oils = [
    { id: 'lavender', name: 'Lavender & Chamomile Blend', description: 'Calming, sleep-inducing, and sweet floral tranquility.', price: 0 },
    { id: 'lemongrass', name: 'Lemongrass & Peppermint Essence', description: 'Invigorating, muscle tension release, and fresh botanical energy.', price: 299 },
    { id: 'sandalwood', name: 'Sacred Sandalwood & Oud Wood', description: 'Grounding, meditative earthy premium aromatherapy.', price: 499 }
  ];

  const optionalAddons = [
    { id: 'scrub', name: 'Signature Sugar Scrub', description: 'Gentle exfoliation with natural organic sugar crystals.', price: 999 },
    { id: 'steam', name: 'Steam & Dry Sauna Access', description: 'Heat therapy to dilate pores and accelerate muscle relaxation.', price: 799 },
    { id: 'jacuzzi', name: 'Private Botanical Jacuzzi', description: '20 Min therapeutic soak with organic rose and frangipani petals.', price: 1499 },
    { id: 'facial', name: 'Hydra-Glow Facial Treatment', description: 'Advanced custom mask infusion with hydration peptide serums.', price: 1199 }
  ];

  // Calculate price dynamically on dependencies change
  useEffect(() => {
    let price = basePrices[duration];
    
    const selectedOil = oils.find(o => o.id === oilId);
    if (selectedOil) price += selectedOil.price;

    addons.forEach(addId => {
      const match = optionalAddons.find(a => a.id === addId);
      if (match) price += match.price;
    });

    setTotalPrice(price);
  }, [duration, oilId, addons]);

  const toggleAddon = (id: string) => {
    setAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleBook = () => {
    const oilName = oils.find(o => o.id === oilId)?.name.split(' ')[0] || '';
    const addonCount = addons.length;
    const desc = `Bespoke ${duration} Min Ritual (${oilName} Oil${addonCount ? ` + ${addonCount} Treatments` : ''})`;
    onBookCustom(desc, totalPrice);
  };

  return (
    <div className="glass-card rounded-xl border border-white/10 p-6 md:p-8 text-silk-beige relative overflow-hidden">
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gold-metallic/5 blur-3xl" />
      
      <div className="mb-8 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic font-semibold flex items-center gap-1 justify-center md:justify-start">
          <Compass size={12} className="animate-spin-slow text-gold-metallic" /> Artisanal Experience
        </span>
        <h3 className="font-headline text-2xl md:text-3xl text-silk-beige mt-2">Bespoke Ritual Customizer</h3>
        <p className="text-sm text-mist-silver mt-1 font-light max-w-xl">
          Design a personalized wellness journey. Select your session duration, configure botanical aromatherapy infusions, and attach state-of-the-art add-ons.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Interactive Side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Duration Selector */}
          <div>
            <span className="block text-xs uppercase tracking-widest text-mist-silver font-semibold mb-3 flex items-center gap-1.5">
              <Hourglass size={12} className="text-gold-metallic" /> 1. Select Session Duration
            </span>
            <div className="grid grid-cols-3 gap-3">
              {[60, 90, 120].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDuration(mins as any)}
                  className={`p-3 rounded border text-center transition-all ${
                    duration === mins
                      ? 'border-gold-metallic bg-gold-metallic/10'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  <p className="text-base font-bold">{mins} Mins</p>
                  <p className="text-[10px] text-mist-silver mt-1">₹{basePrices[mins as keyof typeof basePrices].toLocaleString('en-IN')}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Oils Selector */}
          <div>
            <span className="block text-xs uppercase tracking-widest text-mist-silver font-semibold mb-3 flex items-center gap-1.5">
              <Droplet size={12} className="text-gold-metallic" /> 2. Infuse Botanical Oils
            </span>
            <div className="space-y-2">
              {oils.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setOilId(o.id)}
                  className={`w-full p-3.5 rounded border text-left transition-all flex items-center justify-between gap-4 ${
                    oilId === o.id
                      ? 'border-gold-metallic bg-gold-metallic/10'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${oilId === o.id ? 'bg-gold-metallic' : 'bg-white/20'}`} />
                      <p className="font-semibold text-xs text-silk-beige">{o.name}</p>
                    </div>
                    <p className="text-[10px] text-mist-silver mt-1 ml-4">{o.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-gold-metallic">
                    {o.price === 0 ? 'Included' : `+ ₹${o.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Add-ons */}
          <div>
            <span className="block text-xs uppercase tracking-widest text-mist-silver font-semibold mb-3 flex items-center gap-1.5">
              <Plus size={12} className="text-gold-metallic" /> 3. Attach Curated Enhancements
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {optionalAddons.map((addon) => {
                const isSelected = addons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded border text-left transition-all flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'border-gold-metallic bg-gold-metallic/10'
                        : 'border-white/10 hover:border-white/20 bg-white/5'
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <p className="font-semibold text-xs text-silk-beige leading-tight">{addon.name}</p>
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-gold-metallic bg-gold-metallic text-obsidian-deep' : 'border-white/20'
                      }`}>
                        {isSelected && <Check size={10} />}
                      </div>
                    </div>
                    <div className="flex items-end justify-between w-full mt-2">
                      <p className="text-[9px] text-mist-silver max-w-[80%] leading-tight">{addon.description}</p>
                      <span className="text-xs font-bold text-gold-metallic shrink-0">+₹{addon.price}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Summary Side */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-white/5 border border-white/10 rounded-lg p-5">
          <div className="space-y-4">
            <h4 className="font-headline text-lg text-silk-beige border-b border-white/10 pb-2">Your Bespoke Journey</h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-mist-silver">
                <span>Base ({duration} Min Massage):</span>
                <span className="text-silk-beige font-semibold">₹{basePrices[duration].toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between text-mist-silver">
                <span>Botanical Oil Selection:</span>
                <span className="text-silk-beige font-semibold">
                  {oilId === 'lavender' ? 'Included' : `+ ₹${oils.find(o => o.id === oilId)?.price}`}
                </span>
              </div>

              {addons.length > 0 && (
                <div className="border-t border-white/10 pt-2.5">
                  <span className="text-[10px] text-gold-metallic uppercase tracking-wider font-semibold">Add-on Treatments:</span>
                  <ul className="space-y-1.5 mt-1">
                    {addons.map(addId => {
                      const item = optionalAddons.find(a => a.id === addId);
                      return (
                        <li key={addId} className="flex justify-between text-mist-silver">
                          <span>• {item?.name}</span>
                          <span className="text-silk-beige font-medium">+₹{item?.price}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 mt-6">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xs uppercase tracking-widest text-mist-silver">Bespoke Session Rate</span>
              <span className="text-3xl font-bold text-gold-metallic font-headline">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            
            <button
              onClick={handleBook}
              className="w-full gold-gradient text-obsidian-deep py-3.5 rounded font-label-caps text-label-caps uppercase flex items-center justify-center gap-2 hover:scale-[1.03] transition-all cursor-pointer"
            >
              Reserve Custom Ritual <ArrowRight size={14} />
            </button>
            <p className="text-[9px] text-center text-mist-silver/70 mt-3">
              *Rate includes standard custom slippers, botanical teas, and access to deep-calm showers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
