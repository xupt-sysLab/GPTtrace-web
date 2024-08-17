import { OpenAIModel, BPF } from '@/types/types';
import { FC } from 'react';

interface Props {
  model: OpenAIModel;
  onChange: (model: OpenAIModel) => void;
}

interface BPFProps {
  bpfType: BPF;
  onChange: (bpfType: BPF) => void;
}

export const ModelSelect: FC<Props> = ({ model, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as OpenAIModel);
  };

  return (
    <div>
      <select
        className="h-[40px] w-[140px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={model}
        onChange={handleChange}
      >
        <optgroup label="GPT">
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-3.5">GPT-3.5</option>
        </optgroup>
        <optgroup label="Hugging Face">
          <option value="Wizardlm">Wizardlm</option>
          <option value="Exllamma">Exllamma</option>
          <option value="Codellama">Codellama</option>
        </optgroup>
        <optgroup label="DeepSeek">
          <option value="deepseek-chat">DeepSeek Chat</option>
          <option value="deepseek-coder">DeepSeek Coder</option>
        </optgroup>
      </select>
    </div>
  );
};

export const BPFSelect: FC<BPFProps> = ({ bpfType, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as BPF);
  };

  return (
    <div>
      <select
        className="h-[40px] w-[140px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={bpfType}
        onChange={handleChange}
      >
        <option value="bpftrace">bpftrace</option>
        <option value="libbpf">libbpf</option>
      </select>
    </div>
  );
};