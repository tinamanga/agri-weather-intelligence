export interface TreeAnalysisResponse {
    analysis_id: string;
    total_tree_count: number;
    tree_density_per_acre: number;
    confidence_score: number;
    canopy_coverage_pct: number;
  
    tree_health: {
      healthy: number;
      needs_care: number;
      needs_replacement: number;
    };
  
    recommendations: string[];
    observations: string[];
    overlay_image_url: string;
  }