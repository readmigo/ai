export const categoryIcons: Record<string, string> = {
  llms: '🧠',
  research: '🔬',
  multimodal: '🎨',
  agents: '🤖',
  coding: '💻',
  robotics: '🦾',
  infra: '⚡',
  industry: '🏢',
  ethics: '⚖️',
};

export function getCategoryIcon(slug: string): string {
  return categoryIcons[slug] || '📰';
}
