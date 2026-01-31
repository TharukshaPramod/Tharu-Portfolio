import { MDXRemote } from 'next-mdx-remote/rsc';
import { CodeBlock } from './code-block';

const components = {
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <CodeBlock {...props} />,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={components} />;
}
