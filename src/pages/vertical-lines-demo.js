import React from 'react';
import Layout from '../components/templates/Layout';
import VerticalLinesBackground from '../components/atoms/VerticalLinesBackground';
import SectionTitle from '../components/atoms/SectionTitle';

const VerticalLinesDemo = () => {
  return (
    <Layout>
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <SectionTitle title="VerticalLinesBackground デモ" />
          
          {/* 基本的な使用例 */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              基本的な使用例
            </h2>
            <VerticalLinesBackground 
              style={{ 
                height: '300px', 
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}
            >
              <div style={{ 
                padding: '2rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  デフォルトの縦ライン背景
                </h3>
                <p>透明度: 0.08, ライン幅: 2px</p>
              </div>
            </VerticalLinesBackground>
          </section>

          {/* カスタマイズ例 */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              カスタマイズ例
            </h2>
            
            {/* 強めのライン */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>強めのライン（opacity: 0.15）</h3>
              <VerticalLinesBackground 
                opacity={0.15}
                style={{ 
                  height: '200px', 
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>より目立つ縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>

            {/* 細いライン */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>細いライン（lineWidth: 1）</h3>
              <VerticalLinesBackground 
                lineWidth={1}
                style={{ 
                  height: '200px', 
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>細い縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>

            {/* カスタムカラー */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>カスタムカラー（アクセントカラー）</h3>
              <VerticalLinesBackground 
                lineColor="var(--color-accent-rgb, 197, 207, 195)"
                opacity={0.12}
                style={{ 
                  height: '200px', 
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>アクセントカラーの縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>
          </section>

          {/* バリエーションクラス */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              バリエーションクラス
            </h2>
            
            {/* Dense */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Dense（密度高め）</h3>
              <VerticalLinesBackground 
                className="dense"
                style={{ 
                  height: '200px', 
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>密度の高い縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>

            {/* Subtle */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Subtle（控えめ）</h3>
              <VerticalLinesBackground 
                className="subtle"
                style={{ 
                  height: '200px', 
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>控えめな縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>

            {/* Bold */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Bold（強調）</h3>
              <VerticalLinesBackground 
                className="bold"
                style={{ 
                  height: '200px', 
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}
              >
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <p>強調された縦ライン背景</p>
                </div>
              </VerticalLinesBackground>
            </div>
          </section>

          {/* 実用例 */}
          <section>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              実用例 - カードコンテンツ
            </h2>
            <VerticalLinesBackground 
              style={{ 
                minHeight: '400px', 
                backgroundColor: '#ffffff',
                padding: '3rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '1.5rem', 
                  color: 'var(--color-primary)',
                  textAlign: 'center'
                }}>
                  縦ライン背景を使ったセクション
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '2rem',
                  marginTop: '2rem'
                }}>
                  <div style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                      特徴 1
                    </h4>
                    <p>背景の縦ラインがコンテンツに深みと質感を与えます。</p>
                  </div>
                  <div style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                      特徴 2
                    </h4>
                    <p>レスポンシブデザインに対応し、モバイルでも美しく表示されます。</p>
                  </div>
                  <div style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                      特徴 3
                    </h4>
                    <p>カスタマイズ可能で、様々なデザインニーズに対応できます。</p>
                  </div>
                </div>
              </div>
            </VerticalLinesBackground>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default VerticalLinesDemo;
