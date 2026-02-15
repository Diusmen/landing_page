import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Image as ImageIcon, BrainCircuit, Search, Upload, Loader2, Wand2 } from 'lucide-react';
import { editImageWithAI, analyzeImageWithAI, generateStrategyWithThinking, searchTrends, fileToGenerativePart } from '../services/geminiService';

type Tab = 'edit' | 'analyze' | 'strategy' | 'trends';

const AIStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('edit');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [groundingData, setGroundingData] = useState<any[]>([]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMimeType(file.type);
      const base64 = await fileToGenerativePart(file);
      setSelectedImage(base64);
      setResult(null);
    }
  };

  const handleAction = async () => {
    setLoading(true);
    setResult(null);
    setGroundingData([]);
    
    try {
      if (activeTab === 'edit' && selectedImage) {
        // Nano Banana feature
        const editedImage = await editImageWithAI(selectedImage, inputPrompt || "Enhance visuals", mimeType);
        setResult(editedImage);
      } else if (activeTab === 'analyze' && selectedImage) {
        // Image Analysis
        const analysis = await analyzeImageWithAI(selectedImage, inputPrompt || "Analyse cette image pour un montage vidéo.", mimeType);
        setResult(analysis || "No analysis returned.");
      } else if (activeTab === 'strategy') {
        // Thinking Mode
        const strategy = await generateStrategyWithThinking(inputPrompt);
        setResult(strategy || "No strategy generated.");
      } else if (activeTab === 'trends') {
        // Google Search
        const { text, grounding } = await searchTrends(inputPrompt);
        setResult(text || "No trends found.");
        setGroundingData(grounding || []);
      }
    } catch (error) {
      console.error(error);
      setResult("Une erreur est survenue. Veuillez vérifier votre clé API et réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'edit':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Retouche Créative (IA)</h3>
            <p className="text-gray-500 text-sm">Utilisez l'IA pour modifier des éléments de vos thumbnails ou scènes.</p>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                {selectedImage ? (
                  <img src={`data:${mimeType};base64,${selectedImage}`} alt="Preview" className="max-h-64 mx-auto rounded-md object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-2 py-8">
                    <Upload className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Cliquez pour uploader une image</span>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            </div>
            <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder="Ex: Ajoute un filtre néon bleu..." 
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-sm"
                />
                <button 
                  onClick={handleAction} 
                  disabled={loading || !selectedImage}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" size={18}/> : <Wand2 size={18}/>}
                  Générer
                </button>
            </div>
             {result && result.startsWith('data:image') && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                 <p className="text-sm font-medium mb-2">Résultat :</p>
                 <img src={result} alt="Result" className="w-full rounded-lg border border-gray-200" />
               </motion.div>
             )}
          </div>
        );
      case 'analyze':
        return (
           <div className="space-y-4">
            <h3 className="text-xl font-semibold">Analyse de Scène</h3>
            <p className="text-gray-500 text-sm">L'IA analyse votre image pour suggérer des améliorations de montage.</p>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                {selectedImage ? (
                  <img src={`data:${mimeType};base64,${selectedImage}`} alt="Preview" className="max-h-64 mx-auto rounded-md object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-2 py-8">
                    <Upload className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Uploader une image</span>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            </div>
            <button 
              onClick={handleAction} 
              disabled={loading || !selectedImage}
              className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
               {loading ? <Loader2 className="animate-spin" size={18}/> : <BrainCircuit size={18}/>}
              Analyser
            </button>
             {result && !result.startsWith('data:image') && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-800 whitespace-pre-wrap">
                 {result}
               </motion.div>
             )}
           </div>
        );
      case 'strategy':
        return (
           <div className="space-y-4">
             <h3 className="text-xl font-semibold">Consultant Stratégique</h3>
             <p className="text-gray-500 text-sm">Posez une question complexe sur votre stratégie vidéo. L'IA réfléchira en profondeur.</p>
             <textarea 
               value={inputPrompt}
               onChange={(e) => setInputPrompt(e.target.value)}
               placeholder="Ex: Comment structurer une vidéo de vente pour maximiser la rétention dans les 30 premières secondes ?"
               className="w-full p-4 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-black resize-none text-sm"
             />
             <button 
              onClick={handleAction} 
              disabled={loading || !inputPrompt}
              className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
               {loading ? <Loader2 className="animate-spin" size={18}/> : <Sparkles size={18}/>}
              Réfléchir & Générer
            </button>
            {result && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-gray-800 whitespace-pre-wrap">
                 {result}
               </motion.div>
             )}
           </div>
        );
      case 'trends':
        return (
          <div className="space-y-4">
             <h3 className="text-xl font-semibold">Recherche de Tendances</h3>
             <p className="text-gray-500 text-sm">Trouvez les dernières tendances vidéo avec des données en temps réel.</p>
             <div className="flex gap-2">
               <input 
                 type="text" 
                 value={inputPrompt}
                 onChange={(e) => setInputPrompt(e.target.value)}
                 placeholder="Ex: Tendances montage TikTok 2025"
                 className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-sm"
               />
               <button 
                onClick={handleAction} 
                disabled={loading || !inputPrompt}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                 {loading ? <Loader2 className="animate-spin" size={18}/> : <Search size={18}/>}
                Rechercher
              </button>
             </div>
             {result && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-800 whitespace-pre-wrap">
                 {result}
                 {groundingData.length > 0 && (
                   <div className="mt-4 pt-4 border-t border-gray-200">
                     <p className="font-semibold mb-2 text-xs uppercase text-gray-500">Sources :</p>
                     <ul className="space-y-1">
                       {groundingData.map((chunk, idx) => (
                         chunk.web?.uri && (
                           <li key={idx}>
                             <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs truncate block">
                               {chunk.web.title || chunk.web.uri}
                             </a>
                           </li>
                         )
                       ))}
                     </ul>
                   </div>
                 )}
               </motion.div>
             )}
          </div>
        )
    }
  }

  return (
    <section className="py-24 bg-luxury-offwhite">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-luxury-gray p-6 flex flex-col gap-2">
            <div className="mb-8 px-2">
              <h2 className="text-white font-serif italic text-xl">Studio IA</h2>
              <p className="text-gray-400 text-xs">Outils pour Créateurs</p>
            </div>
            
            <button onClick={() => { setActiveTab('edit'); setResult(null); }} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'edit' ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
              <Wand2 size={18} /> Éditeur Magique
            </button>
            <button onClick={() => { setActiveTab('analyze'); setResult(null); }} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'analyze' ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
              <ImageIcon size={18} /> Analyse Image
            </button>
            <button onClick={() => { setActiveTab('strategy'); setResult(null); }} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'strategy' ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
              <BrainCircuit size={18} /> Consultant Pro
            </button>
            <button onClick={() => { setActiveTab('trends'); setResult(null); }} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${activeTab === 'trends' ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
              <Search size={18} /> Tendances
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 md:p-12 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIStudio;